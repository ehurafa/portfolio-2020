// import { PagesService } from './../../../services/pages.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pagetitle: any;
  pageContent: any;

  constructor(
    //private pagesService: PagesService,
    //private router: Router,
    //private route: ActivatedRoute,
    ) { }
  

  ngOnInit(): void {
      // this.pagesService.getPages().subscribe(pages=>{
      
      // let res = pages.filter(function(page) {       
      //   return page.slug == "sobre-mim";
      // });

      // this.pagetitle = res[0].title.rendered;
      // this.pageContent = res[0].content.rendered;

    //});
    
  }

}
