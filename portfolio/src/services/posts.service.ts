import { environment } from './../environments/environment';
import { Job } from '../app/job/job.model';

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import {map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsAPI = "http://localhost:6001/jobs"; //environment.postsAPI;

  colorEmmit = new EventEmitter<string>();

  color: string;

  constructor( 
    private http: HttpClient 
    ) { 

  }

  getPosts(): Observable<Job> {
    console.log('p ', this.postsAPI);
    let res =   this.http.get<Job>(this.postsAPI).pipe(
        map(obj => {
          console.log(obj);
          return obj
        })
      );
      console.log('res ', res);
      return res;
   
  };  

  getPost(id: number): Observable<Job> {
    const url = `${this.postsAPI}/${id}`;
    return this.http.get<Job>(url).pipe(
      map(obj => obj),
      catchError(e =>  this.errorHandler(e))
    )
  }  
 
 showMessage(msg: string, isError: boolean = false): void {
    // this.snackBar.open(msg, 'x', {
    //   duration: 5000,
    //   horizontalPosition: "right",
    //   verticalPosition: "top",
    //   panelClass: isError ? ['msg-error'] : ['msg-success']
    // })
    console.log('ERROR ', msg);
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }  
  
  // getColorPage(): any {
  //   return this.color;
  // }

  setColorPage(color: any) {
    this.color = color;
    this.colorEmmit.emit(color);
  }
}
