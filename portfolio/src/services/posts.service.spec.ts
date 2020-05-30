import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  // let service: PostsService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(PostsService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});




/**

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      // declarations: [
      //     AppComponent
      // ],
      imports: [HttpClientTestingModule], 
      providers: [PostsService],
      schemas: [
          NO_ERRORS_SCHEMA
      ]
  }).compileComponents();

    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});



*/