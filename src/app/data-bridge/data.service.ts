import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { ESPIPE } from 'constants';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TextData } from './text.model'


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

}
