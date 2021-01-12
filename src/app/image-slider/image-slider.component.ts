import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

}
