import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-finish.component.html',
  styleUrls: ['./modal-confirm-finish.component.css']
})
export class ModalConfirmFinishComponent implements OnInit {

  constructor(private modalConfirmFinishDialogRef: MatDialogRef<ModalConfirmFinishComponent>) { }

  ngOnInit() {
  }

  close(){
    this.modalConfirmFinishDialogRef.close();
  }

  save(){
    this.modalConfirmFinishDialogRef.close(1);
  }

}
