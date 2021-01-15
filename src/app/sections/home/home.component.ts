import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() { }

  //vars to control menu position
  contentBottomPos = 450;
  contentPos = this.contentBottomPos;
  breakpointMoveMenu = 300;


}
