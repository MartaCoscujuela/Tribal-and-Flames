import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TextData } from './text.model'
import { ImgData } from './img.model'
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { error } from 'protractor';


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

      (typeof(esp) === 'object') ? imgData.append("esp", esp, name+"_esp") : imgData.append("esp", esp);
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
}
