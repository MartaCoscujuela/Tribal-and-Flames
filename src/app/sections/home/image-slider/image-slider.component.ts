import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('myTestDiv') video: ElementRef;

  slides = [
    {img: "/assets/img/00_home/galeria/00.jpg"},
    {img: "/assets/img/00_home/galeria/01.jpg"},
    {img: "/assets/img/00_home/galeria/02.jpg"},
    {img: "/assets/img/00_home/galeria/03.jpg"},
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    adaptiveHeight: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

}
