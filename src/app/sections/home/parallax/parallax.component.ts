import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  constructor() { }
  @ViewChild('parallax', { static: true }) parallax: ElementRef;

  offsetY1; offsetY2; offsetY3;
  top;
  height;


  monitorPos;
  ngOnInit(): void {
    this.getOffsetY();

  }


  @HostListener("window:scroll")
  onWindowScroll(){
    this.getOffsetY();
  }


  @HostListener("window:resize")
  onWindowResize(){
    this.getOffsetY();

  }

  getOffsetY(){
    this.height = window.innerHeight;
    const width = window.innerWidth;
    const rect = this.parallax.nativeElement.getBoundingClientRect();
    this.top = rect.top

    let edge = 220;
    if (width >= 600){
      edge = 220;
    } else {
      edge = 100
    }

    this.offsetY1 = this.mapValues(-edge, edge, 0);
    this.offsetY2 = this.mapValues(-edge, edge,  this.height/5);
    this.offsetY3 = this.mapValues(-edge, edge,  this.height/2.5);

      // new_value = (old_value - old_bottom) / (old_top - old_bottom) * (new_top - new_bottom) + new_bottom

  }


mapValues(max, min, offset){

  return (((this.top - offset) - this.height) /  -this.height) * (max-min) + min;
}
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
