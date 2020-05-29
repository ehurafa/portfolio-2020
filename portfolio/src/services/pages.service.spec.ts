import { NO_ERRORS_SCHEMA } from '@angular/core';

import { async, TestBed, inject } from '@angular/core/testing';

import { PagesService } from './pages.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PagesService', () => {
  let service: PagesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
   // TestBed.configureTestingModule({});

   TestBed.configureTestingModule({
     imports: [ HttpClientTestingModule ]
   });

   /* TestBed.configureTestingModule({
      // declarations: [
      //     AppComponent
      // ],
     imports: [HttpClientTestingModule], 
      providers: [ PagesService],
      schemas: [
          NO_ERRORS_SCHEMA
      ]
  }).compileComponents();  */

  httpClient = TestBed.get(HttpClient);
  httpTestingController = TestBed.get(httpTestingController);

    //service = TestBed.inject(PagesService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it(`should create`, async(inject([HttpTestingController, PagesService],
  //   (httpClient: HttpTestingController, apiService: PagesService) => {
  //     expect(apiService).toBeTruthy();
  // })));

  // it('should be created', inject([PagesService], (service: PagesService) => {
  //   expect(service).toBeTruthy();
  // }));
});
