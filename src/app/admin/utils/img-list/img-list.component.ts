import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  constructor() { }

  @Input() name
  currentLang = 'esp'
  status:string
  images: {url:string, order:number}[] = [
    {
      url: "https://via.placeholder.com/350x65",
      order: 1
    },
    {
      url: "https://via.placeholder.com/300",
      order: 0
    },
    {
      url: "https://via.placeholder.com/400",
      order: 2
    },

  ];

  ngOnInit(): void {
  }

  oppositeLang(){
    return this.currentLang === "esp" ? "eng" : "esp";
  }

  changeLang(){
    this.currentLang = this.oppositeLang();
    //this.getLangPreview();
  }
}
