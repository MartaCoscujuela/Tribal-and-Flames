import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }
  @ViewChild('parallax', { static: true }) parallax: ElementRef;

  offsetY
  top;
  height;
  parallaxSpeed = -0.1;
  onView = false;


  monitorPos;
  ngOnInit(): void {
    this.getOffsetY();
    this.setParallaxSpeed();

  }


  @HostListener("window:scroll")
  onWindowScroll(){
    this.getOffsetY();
  }


  @HostListener("window:resize")
  onWindowResize(){
    this.setParallaxSpeed();
  }

  getOffsetY(){
    this.height = window.innerHeight;

    const rect = this.parallax.nativeElement.getBoundingClientRect();
    const onScreen =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    this.top = rect.top

this.mapValue();


    /*
     if (width >= 900){
      this.offsetY = window.innerHeight/2 - (this.parallax.nativeElement.getBoundingClientRect().y);
     } else {
      this.offsetY = window.pageYOffset;
     }

    if(this.offsetY > 900){
      this.onView = true
    }
    else{
      this.onView = false
    }*/
  }

  setParallaxSpeed(){
    const width = window.innerWidth;
    if (width > 1920){
      this.parallaxSpeed = -0.1;
    }
    else if (width > 1200){
      this.parallaxSpeed = -0.2;
    } else if (width > 900){
      this.parallaxSpeed = -0.3;
    } else {
      this.parallaxSpeed = -0.6;
    }
  }

  mapValue(){

    this.monitorPos = ((this.top - this.height) /  -this.height)

    this.offsetY = ((this.top - this.height) /  -this.height) * (100+100) - 100
   //new_value = (old_value - old_bottom) / (old_top - old_bottom) * (new_top - new_bottom) + new_bottom;
  }
}
