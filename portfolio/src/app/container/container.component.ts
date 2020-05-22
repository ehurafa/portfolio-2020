import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  posts = [];

  constructor(private postsService: PostsService ) { 

  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    console.table(this.posts['acf']);
  }

}
