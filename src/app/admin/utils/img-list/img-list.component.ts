import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { error } from 'protractor';
import { DataService } from 'src/app/data-bridge/data.service';
import { SliderData } from 'src/app/data-bridge/slider.model';
import { mimeType } from '../mime-type.validator';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() name
  currentLang = 'esp'
  status:string
  form: FormGroup;

  images: SliderData;

  ngOnInit(): void {
    console.log(this.name);
    this.dataService.getSlider(this.name).subscribe(response =>{
      this.images = response
      console.log(response);
      this.reorder()
      this.form = new FormGroup({
        'img': new FormControl(null, {
          validators: [Validators.required],
          asyncValidators: [mimeType]
        })
      })
    },
    error =>{
      console.log(error)
    })

  }

  reorder(){
    this.images.esp.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
  }

  oppositeLang(){
    return this.currentLang === "esp" ? "eng" : "esp";
  }

  changeLang(){
    this.currentLang = this.oppositeLang();
    //this.getLangPreview();
  }

  changeOrderItems(event){
    this.status = ''
    const img = event.img.img
    const step = event.step
    const order = event.img.order
    const newImages = this.images.esp.map(image =>{
      if (image.img === img){
        image.order = image.order + step
      } else if (image.order === order + step){
        image.order = image.order - step
      }
      return image
    });
    this.images.esp = newImages
    this.reorder();

  }

  deleteItem(event){
    this.status = ''
    const img = event.img

    const imagesItemRemoved = this.images.esp.filter(image => {
      return image.img !== img
    });

    const imagesReordered = imagesItemRemoved.map(image =>{
      if (image.order > event.order){
        image.order--
      }
      return image
    });

    this.images.esp = imagesReordered
  }


  onImagePicked(event: Event){
    let newImg = {img:'', order: 0, updated: true, file: null}
    const file = (event.target as HTMLInputElement).files[0];

    newImg.order = 0
    newImg.updated = true

    const reader = new FileReader();
    this.form.patchValue({img: file});

    const formImg =  this.form.get('img')
    reader.onload = () =>{

      formImg.updateValueAndValidity()
      const subscription = formImg.statusChanges.subscribe( response=>{
        if (response === 'VALID'){
          this.status = ''
          newImg.file =  (event.target as HTMLInputElement).files[0];
          newImg.img = reader.result as string;
          this.images.esp = this.images.esp.map(img => {
            img.order++
            return img
          });
          this.images.esp.unshift(newImg);
          subscription.unsubscribe();
        } else if (response === 'INVALID'){
          this.status = 'postingErr'
          subscription.unsubscribe();
        } 
      })
    }
    reader.readAsDataURL(file);
  }


  onSubmit(){
    this.dataService.postSlider(this.images).subscribe(
      (response)=>{
        this.images = response
        this.reorder()
        this.status = 'success'
      },
      err =>{
        console.log(err)
        this.status = 'postingErr'
      }
    );
  }



}
