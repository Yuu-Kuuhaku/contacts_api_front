import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrls: ['./modal-loading.component.css']
})
export class ModalLoadingComponent implements OnInit {

  public carregando: any;
  options: AnimationOptions = {
    path: '/assets/19535-beer.json',
  };

  constructor(
    private modalLoadingDialogRef: MatDialogRef<ModalLoadingComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.carregando = data;
  }

  ngOnInit() {
  }

  close(){
    this.modalLoadingDialogRef.close()
  }


  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(0.5);
    console.log(animationItem);
  }

}
