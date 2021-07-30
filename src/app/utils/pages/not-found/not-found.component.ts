
import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  innerWidth: number = 0;


  constructor(
    private eRef: ElementRef
  ) {
    this.innerWidth = window.innerWidth;
   }

  ngOnInit(): void {
  }

}
