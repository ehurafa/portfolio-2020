import { Job } from '../app/job/job.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import {map,   catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = "http://localhost:4200/job";

  postsAPI = 'http://localhost:6001/jobs';

  colorPage: string;

  constructor( private http: HttpClient ) { }

  getPosts(): Observable<Job> {

  return  this.http.get<Job>(this.postsAPI).pipe(
      map(obj => obj)
    );
   
  }  

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
  
  getColorPage(): string {
    return this.colorPage;
  }

  setColorPage(color): any {
    this.colorPage = color;
  }
}
