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

import FastAverageColor from 'fast-average-color/dist/index.es6';

//const imageToBase64 = require('image-to-base64');

import base64 from 'image-to-base64';
//import * as Vibrant from 'node-vibrant';

import * as fs from 'fs';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  job: any;

  palette: any;

  tooltip: any;
  tooltipTitle: any;

  teste: any;
  teste2: any;

  imageFake: any;

  imageBase64: any; 

  result: Observable<any>;

   @ViewChild("myDiv") divView: ElementRef;
   @ViewChild("myDiv2") divView2: ElementRef;
   @ViewChild("myDiv3") divView3: ElementRef;
   @ViewChild("myDiv4") divView4: ElementRef;
   @ViewChild("myDiv5") divView5: ElementRef;
   @ViewChild("myDiv6") divView6: ElementRef;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private _location: Location,
    private renderer: Renderer2,
    private el: ElementRef) { }

    backClicked() {
      this._location.back();
    }

    elBackground(bg) {
      return bg;
    }

 
    styleContainer(): any {
      console.log('palette', this.palette);
      if (this.palette.LightVibrant) {
        return { 'background-color': this.palette.LightVibrant.getHex(), 'border-color': 
          this.palette.LightMuted.getHex(), 'color': '#000000' };
      } else {
        return { 'background-color': '#FFFFFF', 'border-color':        
           this.palette.LightMuted.getHex(), 'color': '#000000' };
      }
    
    }

 

   toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))  


  
    ngOnInit(): void {
     
   
   
       const id = + this.route.snapshot.paramMap.get('id');
       this.postsService.getPost(id).subscribe(job => {
         this.job = job;

         this.imageFake = `<img src="${this.job?.acf?.image_post?.sizes?.large}" />`;
         console.log(' this.job ',  this.job);
         console.log('bg ', this.job?.acf?.image_post?.sizes?.large);
       //  console.log('this.divView ', this.divView2.nativeElement.currentSrc); 

          console.log('bg this.result ', this.result);

        
   
       });
 


       //div.renderer.setProperty(this.el.nativeElement, 'href', '#');
       const text = this.renderer.createText('Hello world!');


         
   
     }

     
  ngDoCheck(): void{        

  }

  ngAfterContentInit(): void {
    
  }

  ngAfterContentChecked(): void {
     
  }

  ngAfterViewInit(): void {   



    this.toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
    .then(dataUrl => {
      console.log('RESULT2:', dataUrl);
       this.imageBase64 = dataUrl;
    })
  

    const Vibrant = require('node-vibrant');

   let image = new Image(200, 200)
        //image.src = 'http://rafaelgomes.net/wp-content/uploads/2017/09/thumbnail-1024x823.jpg';
        image.src =  this.imageBase64;

        console.log('this.divView5 ', this.divView5.nativeElement.currentSrc);
        console.log('image ', image);

        let vibrant = new Vibrant(image);

        console.log('vibrant   ', vibrant  );

       let  swatches = vibrant.swatches();

       console.log('swatches  ', swatches );

       for (const swatch in swatches) {

        console.log(swatches['colorMuted'].getHex());
         if ( swatches.hasOwnProperty(swatch)) {
  
           
         }
       }
        console.log(this.divView2.nativeElement.currentSrc);
    
    // Vibrant.from(image).getPalette()
    // //Vibrant.from(this.divView2.nativeElement.currentSrc).getPalette()
    // .then((palette) => {
    //   console.log(palette);
    //   this.palette = palette
    // })  

    // this.tooltip = this.renderer.createElement('div');

 
    //  const li  = this.renderer.createElement('img');
    // const text = this.renderer.createText('Hello world!');

    // this.renderer.appendChild(li, text);
    // this.renderer.appendChild(this.el.nativeElement, li);
   // this.renderer.setProperty(this.el.nativeElement, 'src', 'http://briangonzalez.github.io/jquery.adaptive-backgrounds.js/img/main-images/1.jpg');
 
 
   
  
}

    ngAfterViewChecked(): void {
     
     this.renderer.setProperty(this.divView3.nativeElement, 'src', this.job?.acf?.image_post?.sizes?.large);     
     

       this.teste = this.divView.nativeElement.innerHTML;

       const colorThief = new ColorThief();
       const img = this.divView3;
   
      // colorThief.getColor(img);

     // console.log(this.encodeImageFileAsURL(this.job?.acf?.image_post?.sizes?.large));

     console.log('this.divView2.nativeElement.innerHTML ', this.divView4.nativeElement.innerHTML);
   


    }
  
  }
