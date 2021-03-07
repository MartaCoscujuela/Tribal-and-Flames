import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-reel',
  templateUrl: './bottom-reel.component.html',
  styleUrls: ['./bottom-reel.component.css'],
})
export class BottomReelComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() videoId: number;
  @Input() background: string;
  backgroundImage;
  slides = [
    { img: '/assets/img/00_home/galeria/00.jpg' },
    { img: '/assets/img/00_home/galeria/01.jpg' },
    { img: '/assets/img/00_home/galeria/02.jpg' },
    { img: '/assets/img/00_home/galeria/03.jpg' },
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
