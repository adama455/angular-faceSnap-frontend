import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapeService: FaceSnapsService){ }

  ngOnInit() : void {
    this.faceSnaps$ = this.faceSnapeService.getAllFaceSnaps();
  }
}
