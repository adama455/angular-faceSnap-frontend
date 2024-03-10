import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit {
  
  buttonText!:string;
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){

  }

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
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

  onViewFacesnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}
