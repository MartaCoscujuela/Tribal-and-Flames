import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courses-grid',
  templateUrl: './courses-grid.component.html',
  styleUrls: ['./courses-grid.component.css']
})
export class CoursesGridComponent implements OnInit {

  @ViewChild('background', { static: true }) background: ElementRef;

  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  onWindowScroll(){
    this.checkIfShowBackground();
  }


  @HostListener("window:resize")
  onWindowResize(){
    this.checkIfShowBackground();

  }


  checkIfShowBackground(){
    const rect = this.background.nativeElement.getBoundingClientRect();
    if (
      
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ){
      this.visible = true;
    } else {
      this.visible = false;

    }
  }
}
