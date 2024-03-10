import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit {
  buttonText!:string;
  faceSnap$!: Observable<FaceSnap>;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const facesnapId = +this.route.snapshot.params[ 'id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(facesnapId);
  }

  onSnap(facesnapId: number) {
    if (this.buttonText == 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(facesnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!' )
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(facesnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }
}
