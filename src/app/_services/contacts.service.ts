import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private endpoint = 'contacts';

  constructor( private http: HttpClient) { }

  public getAll(): Observable<any> {
    return this.http.get(`${ environment.baseUrl}/${this.endpoint}/`);
  }

  public getById( contactId: string): Observable<any>{
    return this.http.get(`${ environment.baseUrl}/${this.endpoint}/${contactId}`);
  }

  public update( contactId: string, body: any): Observable<any> {
    return this.http.put(`${ environment.baseUrl}/${this.endpoint}/${contactId}`, body);
  }

  public create( body: any): Observable<any> {
    return this.http.put(`${ environment.baseUrl}/${this.endpoint}/`, body);
  }

  public delete( contactId: string, ): Observable<any> {
    return this.http.delete(`${ environment.baseUrl}/${this.endpoint}/${contactId}`);
  }


}

