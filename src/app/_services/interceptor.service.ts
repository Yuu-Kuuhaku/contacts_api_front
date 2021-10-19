import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, filter, finalize, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  // dialogLoading: MatDialogRef<LoadingComponent>;


  constructor( private router: Router, ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler, ){

    return next.handle(req).pipe(

      finalize(()=> {
        if(req.url.includes('http')){


        }

      }),
      catchError((error: HttpErrorResponse)=> {

        if(error.status === 401){
          // this.authService.logout();
          console.log(error);
          // this.router.navigate(['/']);
        }
        return throwError(error);
      })


    );
  }

}
