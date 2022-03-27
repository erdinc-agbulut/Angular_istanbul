import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private router: Router) {}
  
  ngOnInit(): void {
    this.buttonText = 'like';
  }

  onSnap(){
    if (this.buttonText === 'like') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'like');
      this.buttonText = 'dislike';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'dislike');
      this.buttonText = 'like';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
