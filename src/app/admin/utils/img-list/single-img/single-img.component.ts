import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faChevronUp, faChevronDown, faTimes} from '@fortawesome/free-solid-svg-icons';
import { SliderData, SliderImgData } from 'src/app/data-bridge/slider.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-img',
  templateUrl: './single-img.component.html',
  styleUrls: ['./single-img.component.css']
})
export class SingleImgComponent implements OnInit, OnChanges {

  constructor() { }

  iconUp = faChevronUp
  iconDown = faChevronDown
  iconTimes = faTimes
  IMG_URL = environment.IMAGES_URL;

  @Input() image: SliderImgData
  @Input() maxOrder

  @Output() deleteMe : EventEmitter<SliderImgData> = new EventEmitter<SliderImgData>();
  @Output() changeMe : EventEmitter<{img: SliderImgData, step: number}> = new EventEmitter<{img,step}>();

  topItem : boolean
  bottomItem : boolean

  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges(){
    console.log('on changes');
  }

  deleteItem(){
    this.deleteMe.emit(this.image)
  }


  isBottomItem(){
    return this.image.order === 0
  }

  isTopItem(){
    return this.image.order === this.maxOrder
  }

  get getBackground(){
  
    return this.image.updated?this.image.img:this.IMG_URL+'/'+this.image.img

  }
  changeOrder(step){

    const event = {img: this.image, step: step}
    this.changeMe.emit(event)
  }
}
