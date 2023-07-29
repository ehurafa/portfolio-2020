import { Component, OnInit, HostBinding } from '@angular/core';
import { PostsService } from './../../../services/posts.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],

})
export class CertificatesComponent implements OnInit {

  posts: any;


  constructor(private postsService: PostsService ) { }

  ngOnInit(): void {
    const foo =  this.postsService.getCerts()
    // .subscribe(posts => {
    //   // this.posts = posts;
    //   console.log('>>> x ', this.posts);
    // });
    this.posts = foo;
    console.log('foo ', foo);
  }

}
