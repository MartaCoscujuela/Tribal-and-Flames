import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  areSubsectionsOpen: boolean;
  areSubusersOpen: boolean;
  areSubcoursesOpen: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  openSubsections(){
    this.areSubusersOpen = false;
    this.areSubcoursesOpen = false;
    this.areSubsectionsOpen = !this.areSubsectionsOpen;
  }

  openSubusers(){
    this.areSubsectionsOpen = false;
    this.areSubcoursesOpen = false;
    this.areSubusersOpen = !this.areSubusersOpen;
  }

  openSubcourses(){
    this.areSubsectionsOpen = false;
    this.areSubusersOpen = false;

    this.areSubcoursesOpen = !this.areSubcoursesOpen;
  }

}
