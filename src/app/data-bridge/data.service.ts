import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { from, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TextData } from './text.model'
import { ImgData } from './img.model'
import { ListData } from './list.model'
import { SliderData, SliderImgData } from './slider.model'

const  BACKEND_URL = environment.BACKEND_URL;

@Injectable(
  {
    providedIn: "root"
  }
)

export class DataService {

  private lang: string = "esp";
  private langListener = new Subject<string>();

  constructor(private http: HttpClient, private router: Router){}

  changeLang(){
    if (this.lang == "esp"){
      this.lang = "eng";
    } else {
      this.lang = "esp";
    }
    return this.langListener.next(this.lang);
  }

  getLangListener(){
    return this.langListener;
  }
  postText(name:string, esp:string, eng: string){
    const textData: TextData = { name, esp, eng}
    return this.http.post<{message: string, text: TextData}>(BACKEND_URL + "/site/text", textData);
  }

  getText(name: string){
    return this.http.get<{
      _id: string,
      name: string,
      esp: string,
      eng: string
    }>(BACKEND_URL + "/site/text/" + name);
  }

  postImg(name:string, esp: File | string, eng: File | string){
    let imgData: ImgData | FormData;
    if (typeof(esp) === 'object' || typeof(eng) === 'object'){
      imgData = new FormData();
      imgData.append("ref", name);
      console.log(esp);

      if (typeof(esp) === 'object'){
        console.log(esp);
        imgData.append("esp", esp, name+"_esp")
      } else {
        imgData.append("esp", esp);
      }
      (typeof(eng) === 'object') ? imgData.append("eng", eng, name+"_eng") : imgData.append("eng", eng);
    } else {
      imgData = {
        ref: name,
        esp: esp as string,
        eng: eng as string,
      }
    }
    return this.http.post<ImgData>(BACKEND_URL + '/site/img', imgData);
  }

  getImg(name:string){
    return this.http.get<ImgData>(BACKEND_URL+"/site/img/"+name)
  }

  postSlider(slider:SliderData){
    let formData

    formData = new FormData()
    formData.append("ref", slider.ref);
    slider.esp.forEach(img => {
      console.log(typeof(img));
      if (img.updated){
        console.log(img.file);
        formData.append("image", img.file, img.order)
      } else {
        formData.append("image", JSON.stringify({img: img.img, order: img.order}))
      }
    });
    return this.http.post<SliderData>(BACKEND_URL + '/site/slider', formData);
  }

  getSlider(name:string){
    return this.http.get<SliderData>(BACKEND_URL+'/site/slider/'+ name);
  }
  postSentences(name: string, esp: string[], eng: string[]){
    const listData: ListData = { name, esp, eng}
    console.log("send");
    return this.http.post<{message: string, text: TextData}>(BACKEND_URL + "/site/list", listData);
  }
}
