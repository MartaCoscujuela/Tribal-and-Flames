import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  constructor() { }

  section = "about";
  images  = ["img1", "img2", "img-home-mosaic-1"]
  ngOnInit(): void {

  }

}
