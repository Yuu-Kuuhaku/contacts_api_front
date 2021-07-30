import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {

  files: File[] = [];
  @Output() addFileEvent = new EventEmitter<File[]>();
  @Input() isMultiple = true;
  @Input() accept = '*';
  @Input() valueInitial = 0;
  id: string = '';
  private quantLimit = 5;
  ngOnInit(): void {
    this.id = this.makeString();
  }
  // @Input() placeholder = 'Arraste e solte os arquivos aqui ou clique para enviar'
  // @Input() accept = 'image/png,image/jpeg,image/jpg';

  onSelect(event: any): void {

    if (this.isMultiple) {
      if(this.files.length + event.addedFiles.length >= this.quantLimit ){
        const value = this.quantLimit - this.files.length - this.valueInitial;
        event.addedFiles.forEach((item: any, i: number) => {
          if(i < value){
            this.files.push(event.addedFiles[i]);
          }
        })
      } else{
        this.files.push(...event.addedFiles);
      }

    } else {
      this.files[0] = event.addedFiles[0];
    }
    this.addFileEvent.emit(this.files);
  }

  onRemove(event: any) {

    this.files.splice(this.files.indexOf(event), 1);
  }

  makeString() {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }
    return outString;
  }


}
