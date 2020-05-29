import { Directive, ElementRef } from '@angular/core';
import {  OnInit } from '@angular/core';
import analyze from 'rgbaster'

@Directive({
  selector: '[appAdaptiveBackground]'
})
export class AdaptiveBackgroundDirective implements OnInit {
  images = null;

  result: any;

  constructor() { 
   // el.nativeElement.innerHTML;
  }

  ngOnInit(): void {
//alert(this.el);
   // this.result = analyze('/2px-blue-and-1px-red-image.png') // also supports base64 encoded image strings
   

  }

}
