import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

    //vars to control header anim
  maxHeaderHeight = 400;
  headerHeight = this.maxHeaderHeight;
  breakpointHeaderShrink = 300;
  imageTransition = 1;
  solidMenuBackground = false;


  ngOnInit(): void {
    this.shrinkHeader();
  }


  @HostListener("window:scroll")
  onWindowScroll(){
    this.shrinkHeader();
  }


  shrinkHeader(){
    const offset = window.pageYOffset;
    if (offset < this.breakpointHeaderShrink){
      this.headerHeight = this.maxHeaderHeight - offset;
      this.imageTransition = 1-(offset/this.breakpointHeaderShrink);
      this.solidMenuBackground = false;
    } else {
      this.headerHeight = this.maxHeaderHeight - this.breakpointHeaderShrink;
      this.imageTransition = 0;
      this.solidMenuBackground = true;
    }

  }
}
