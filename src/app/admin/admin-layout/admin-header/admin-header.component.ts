import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburguer(){
    console.log("opens");
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
