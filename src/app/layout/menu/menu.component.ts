import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() { }

  //vars to control menu position
  @Input() menuPos:number;
  @Input() solidBackground:boolean;

  isMenuCollapsed: boolean = true;

  onToggleHamburger(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
