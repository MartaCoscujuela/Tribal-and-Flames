import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  image = 'url("/assets/img/01_about/banner.png")';
  constructor() {}

  ngOnInit(): void {}
}
