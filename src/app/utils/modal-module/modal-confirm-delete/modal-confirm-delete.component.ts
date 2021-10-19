import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.css']
})
export class ModalConfirmDeleteComponent implements OnInit {

  constructor(private modalConfirmDeleteDialogRef: MatDialogRef<ModalConfirmDeleteComponent>) { }

  ngOnInit() {
  }

  close(){
    this.modalConfirmDeleteDialogRef.close()
  }

  save(){
    this.modalConfirmDeleteDialogRef.close(1)
  }

}
