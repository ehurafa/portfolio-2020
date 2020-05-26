import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { AdaptiveBackgroundDirective } from './directives/adaptive-background.directive';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  bgColor: string;

  nomeBehaviorSubjectPai= new BehaviorSubject<string>("rafa");

  constructor(private postsService: PostsService) {
  
   
  }

  ngOnInit(): void {
    let cor = this.postsService.getColorPage();
    console.log(cor);
  }

  setBgColor() {
    console.log('BG COLOR ', this.bgColor );
    this.postsService.setColorPage(this.bgColor);
  }

}
