import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any ;

  displayedColumns: string[] = [ 'name', 'email', 'createdAt', 'actions' ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  ngOnInit() {
    this.getContacts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getContacts(){
    this.contactsService.getAll().subscribe((data) =>{
      this.dataSource = new MatTableDataSource(data);

    }, (error) => {
      console.log(error);
    } );
  }
  deleteContact(id: string){

  }

  openContact(id: string){

  }

  save(){

}
  constructor( private contactsService: ContactsService) {

    // Assign the data to the data source for the table to render
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
