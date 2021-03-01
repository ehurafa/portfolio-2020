import { Subject } from 'rxjs';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        // animation for the page entering
      ]),
      transition(':leave', [
        // animation for the page leaving
      ])
    ])
  ]
})
export class ContainerComponent implements OnInit {

  posts: any = [];

  cols: any = [];
  colOne: any = [];
  colTwo: any = [];
  colThree: any = [];

  colsINdex: any = [];

  @HostBinding('@pageAnimations')
  public animatePage = true;

  constructor(private postsService: PostsService
     ) { 

  }

  ngOnInit(): void { 
     
    this.postsService.getPosts()
    .subscribe(posts => {
      this.posts = posts;
    }); 

    for (const key in this.posts) {
      if (this.posts.hasOwnProperty(key)) {
        const element = this.posts[key];
 
        this.cols.push(element.acf);
      }
    }
    
 
    for (let index = 0; index < this.cols.length; index++) {
       
        this.colOne.push(this.cols[index]);
        this.colTwo.push(this.cols[index +1] );
        this.colThree.push(this.cols[index +2] ); 
        
        this.colsINdex.push(index);

    }


    // console.log('this.colOne ', this.colOne);
    // console.log('this.colTwo ', this.colTwo);
    // console.log('this.colThree ', this.colThree);

  }

}
