import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ElementRef, ViewChild, OnDestroy, Renderer2, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from './job.model';
import {Location} from '@angular/common';
import analyze from 'rgbaster';

import ColorThief from './../../assets/js/color-thief.umd';

import * as Vibrant from 'node-vibrant/dist/vibrant.min';
//import Vibrant from 'node-vibrant/dist/vibrant.min'; //../../../node_modules/node-vibrant/lib/color
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  job: any;

  pageBg: any;

  palette: any;

  imageBase64: any; 

  result: Observable<any>;

  subscription: Subscription;

  technologies: String[];

  @ViewChild("section") section: ElementRef;

  @ViewChild("figure") figure: ElementRef;

  @ViewChild("title") title: ElementRef;

  @ViewChild("toback") toback: ElementRef;  

  @Output() bgColor = new EventEmitter();

  @Input() nomeBehaviorSubject: BehaviorSubject<string>;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private _location: Location,
    private renderer: Renderer2,
    private el: ElementRef) { 
   
    }

    setBack() {
     this.postsService.setColorPage(this.pageBg);
    }

    backClicked() {
      this._location.back();
    }   

    setBg(el, dark, light) {
      //this.renderer.setStyle(el, 'background-image', `linear-gradient(to  right bottom, ${dark}, ${light}`); 
      this.renderer.setStyle(el, 'background-color', `rgba(${light[0]},${light[1]},${light[2]},0.6)`);             
    }

   toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }));

    showVibrantColor(url): any {   
      //  base64
      this.toDataURL(url)
      .then(dataUrl => {
        this.imageBase64 = dataUrl;
        const Vibrant = require('node-vibrant');  
        let image = new Image(200, 200)
        image.src =  this.imageBase64;

        Vibrant.from(image).getPalette()
        .then((palette) => {
          this.palette = palette; 

          console.log('palette ', this.palette);
          
          this.setBg(this.figure.nativeElement, this.palette.DarkVibrant.getHex(),this.palette.Muted.rgb);           

          //this.setBg(this.section.nativeElement, this.palette.DarkVibrant.getHex(),this.palette.Vibrant.getHex()); 
          //this.renderer.setStyle(this.title.nativeElement, 'background-color', this.palette.Vibrant.getHex());    
          
          //this.renderer.setStyle(this.title.nativeElement, 'background-color', this.palette.DarkVibrant.getHex() ); 
          //this.renderer.setStyle(this.title.nativeElement, 'color', this.palette.DarkVibrant.titleTextColor); 

          this.renderer.setStyle(this.toback.nativeElement, 'background-color', this.palette.DarkVibrant.getHex());
          this.renderer.setStyle(this.toback.nativeElement, 'color', this.palette.DarkVibrant.titleTextColor);
          
          
          this.postsService.setColorPage = palette;

          //this.bgColor.emit(palette);

          this.postsService.colorEmmit.subscribe(
            cor =>  cor//console.log('corrr ', cor)
          ); 

        })  

      });
    }
  
  ngOnInit(): void {      
    const id = + this.route.snapshot.paramMap.get('id');

      this.postsService.getPost(id).subscribe(job => {
      this.job = job;

      this.technologies = this.job?.acf?.list_of_technologies;
      
      this.showVibrantColor(this.job?.acf?.image_post?.sizes?.large);
     
    });     

  }
 

  ngDoCheck(): void{ }
  ngAfterContentInit(): void { }
  ngAfterContentChecked(): void {}
  ngAfterViewInit(): void { 
    // console.log('this.postsService.getColorPage ',this.postsService.getColorPage());
  }
  ngAfterViewChecked(): void { }
  
  }
