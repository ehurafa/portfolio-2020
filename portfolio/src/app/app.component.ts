import { slideInAnimation } from './animations';
//## import { environment } from './../environments/environment';
//import { PostsService } from './../services/posts.service';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Inject  } from '@angular/core';
//## import { AdaptiveBackgroundDirective } from './directives/adaptive-background.directive';
import { BehaviorSubject } from 'rxjs';
import {transition, trigger, group, animate, style, query} from '@angular/animations';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

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
    @Inject(DOCUMENT) private document: Document
    //public router: Router
    ) {
      /*this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      }); */
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
      document.documentElement.scrollTop > 20) {
      document.getElementById('sidebar').classList.add('squeezed');  
    }
    if (document.body.scrollTop > 60 ||     
      document.documentElement.scrollTop > 60) {
      document.getElementById('sidebar').classList.add('squeezed__level-2');  
    }
    if (document.body.scrollTop > 120 ||     
      document.documentElement.scrollTop > 120) {
      document.getElementById('sidebar').classList.add('squeezed__level-3');  
    }
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
