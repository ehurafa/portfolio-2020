import { Injectable } from '@angular/core';
import { Observable, EMPTY, Subject } from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  pagesAPI = 'http://localhost:6001/pages'; 

  constructor( 
    //private http: HttpClient
    ) { }

  // getPages(): Observable<any> {

  //   let res =  this.http.get<any>(this.pagesAPI).pipe(
  //     map(obj => obj)
  //   );       
  //   return  res;
  // } 

  // getPage(slug: number): Observable<any> {
  //   const url = `${this.pagesAPI}/${slug}`;
  //   return this.http.get<any>(url).pipe(
  //     map(obj => 
  //       {
  //         console.log('MAP ', obj );
  //        return  obj
  //       }
        
  //       ),
  //     catchError(e =>  this.errorHandler(e))
  //   )
  // }  

 showMessage(msg: string, isError: boolean = false): void {
    // this.snackBar.open(msg, 'x', {
    //   duration: 5000,
    //   horizontalPosition: "right",
    //   verticalPosition: "top",
    //   panelClass: isError ? ['msg-error'] : ['msg-success']
    // })
    console.log('ERROR ', msg);
  } 

 // errorHandler(e: any): Observable<any> {
  // errorHandler(e: any) {
  //   console.log('e ', e);
  //   this.showMessage('Ocorreu um erro!', true);
  //   return EMPTY;
  // }  

 
}
