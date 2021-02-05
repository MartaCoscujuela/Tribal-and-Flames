import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  //vars to control menu position
  @Input() menuPos:number;
  @Input() solidBackground:boolean;

  isMenuCollapsed: boolean = true;

  ngOnInit(){
    this.router.events.subscribe((val) => {
     this.isMenuCollapsed = true;
  });
 }

  onToggleHamburger(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
