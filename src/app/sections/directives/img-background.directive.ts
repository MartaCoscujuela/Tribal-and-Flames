import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-bridge/data.service';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appImgBackground]',
})
export class ImgBackgroundDirective implements OnInit {
  @Input() appImgBackground: string;
  imgUrl = environment.IMAGES_URL;

  constructor(private el: ElementRef, private dataService: DataService) {}

  ngOnInit() {
    console.log('ref:');
    console.log(this.appImgBackground);
    this.dataService.getImg('img-home-mosaic-1').subscribe(
      (response) => {
        console.log(this.imgUrl + '/' + response.esp);
        this.el.nativeElement.style.backgroundImage = 'url(' + this.imgUrl + '/' + response.esp + ')';
        //  this.ref = this.imgUrl + '/' + response.esp;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
