import { slideInAnimation } from './animations';
//## import { environment } from './../environments/environment';
//import { PostsService } from './../services/posts.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//## import { AdaptiveBackgroundDirective } from './directives/adaptive-background.directive';
import { BehaviorSubject } from 'rxjs';
import {transition, trigger, group, animate, style, query} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  bgColor: string;

  environment: string;

  @ViewChild("outlet") outlet: ElementRef;

  //## nomeBehaviorSubjectPai= new BehaviorSubject<string>("rafa");

  constructor(//private postsService: PostsService
    ) {
  
   
   
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit(): void {
   // let cor = this.postsService.getColorPage();


    
  }

  setBgColor() { 
    //## console.log('BG COLOR ', this.bgColor );
    //  this.postsService.setColorPage(this.bgColor);
  }

}
