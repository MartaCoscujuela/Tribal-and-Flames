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

  parallaxSpeed = -0.1;

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
    console.log(window.innerHeight);
    this.offsetY = window.innerHeight/2 - (this.parallax.nativeElement.getBoundingClientRect().y);
    console.log(this.offsetY);
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
    }

  }
}
