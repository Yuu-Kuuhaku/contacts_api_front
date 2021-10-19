import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './modal-exit.component.html',
  styleUrls: ['./modal-exit.component.css']
})
export class ModalExitComponent implements OnInit {

  constructor(

    private modalExitDialogRef: MatDialogRef<ModalExitComponent>,
  ) {

  }
  ngOnInit() {
    console.log();
  }

  close( isClear: boolean){
    this.modalExitDialogRef.close(isClear);
  }
}
