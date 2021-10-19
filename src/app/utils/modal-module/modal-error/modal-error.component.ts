import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {

  public erro : any;

  constructor(
    private modalErrorDialogRef: MatDialogRef<ModalErrorComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.erro = data
  }

  ngOnInit() {

  }

  close(){
    this.modalErrorDialogRef.close()
  }

}
