import { Observable } from 'rxjs';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  job: any;

  pageBg: string;

  palette: any;

  imageBase64: any; 

  result: Observable<any>;

  @ViewChild("figure") figure: ElementRef;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private _location: Location,
    private renderer: Renderer2,
    private el: ElementRef) { }

    backClicked() {
      this._location.back();
    }   

    setBg(el, light, dark) {
      this.renderer.setStyle(el, 'background-image', `linear-gradient(to  right bottom, ${dark}, ${light}`); 
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

          this.setBg(this.figure.nativeElement, this.palette.DarkVibrant.getHex(),this.palette.LightVibrant.getHex());          

        })  

      });
    }
  
  ngOnInit(): void {      
    const id = + this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(id).subscribe(job => {
      this.job = job;
      this.showVibrantColor(this.job?.acf?.image_post?.sizes?.large);
    });

     

  }
     
  ngDoCheck(): void{ }
  ngAfterContentInit(): void { }
  ngAfterContentChecked(): void {}
  ngAfterViewInit(): void { 
    
  }
  ngAfterViewChecked(): void { }
  
  }
