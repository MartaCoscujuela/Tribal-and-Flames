import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }


  ngOnInit(){
    this.moveMenu();
  }

  //vars to control menu position
  menuBottomPos = 400;
  menuPos = this.menuBottomPos;
  breakpointMoveMenu = 300;
  solidBackground = false

  doSomethingOnWindowsScroll($event:Event){
    this.moveMenu();
  }

  moveMenu(){
    const offset = window.pageYOffset;

    if (offset < this.breakpointMoveMenu){
      this.menuPos = this.menuBottomPos - offset;
      this.solidBackground = false;
    } else {
      this.menuPos = this.menuBottomPos - this.breakpointMoveMenu;
      this.solidBackground = true;
    }
  }
}
