import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit {
  buttonText!:string;
  faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const facesnapId = +this.route.snapshot.params[ 'id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapsById(facesnapId);
  }

  onSnap() {
    if (this.buttonText == 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
