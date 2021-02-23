import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'protractor';
import { DataService } from 'src/app/data-bridge/data.service';
import { isTypeOnlyImportOrExportDeclaration } from 'typescript';
import { TextData } from '../../../data-bridge/text.model'

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})

export class TexteditorComponent implements OnInit {

  textForm: FormGroup;
  langs: string[] = ["esp", "eng"]
  currentLang: string = "esp";
  textData: TextData;
  text: string;
  status: string = "";


  @Input() section;
  @Input() name;

  constructor(public dataService: DataService) { }


  ngOnInit(): void {
    this.getText();
    this.textForm = new FormGroup({
      "esp": new FormControl(),
      "eng": new FormControl()
    });
  }

  changeLang(){
    this.currentLang = this.oppositeLang();
  }

  oppositeLang(){
    if (this.currentLang === "esp"){
      return "eng";
    } else {
      return "esp";
    }
  }

  getText(){
    this.dataService.getText(this.name).subscribe((text)=>{
      this.textForm.setValue({"esp": text.esp, "eng": text.eng})
      this.textData = text;
    },
    error => {
      this.status = "loadingErr";
    })
  }

  onSubmit(){
    if (this.textForm.invalid){
      return
    }
    this.dataService.postText(this.name, this.textForm.value.esp, this.textForm.value.eng)
    .subscribe((text)=>{
      this.textData = text.text;
      this.status = "success";
    },
    (error) => {
      console.log(error);
      this.status = "postingErr";
    });
  }
}