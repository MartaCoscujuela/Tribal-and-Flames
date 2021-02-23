import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-img',
  templateUrl: './single-img.component.html',
  styleUrls: ['./single-img.component.css']
})
export class SingleImgComponent implements OnInit {

  constructor() { }

  @Input() url
  @Input() order

  ngOnInit(): void {
  }

}
