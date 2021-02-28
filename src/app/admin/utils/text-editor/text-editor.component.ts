import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data-bridge/data.service';
import { TextData } from '../../../data-bridge/text.model';

@Component({
  selector: 'app-texteditor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit {
  @Input() section;
  @Input() name;

  textForm: FormGroup;
  langs: string[] = ['esp', 'eng'];
  currentLang = 'esp';
  textData: TextData;
  text: string;
  status = '';

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getText();
    this.textForm = new FormGroup({
      esp: new FormControl(),
      eng: new FormControl(),
    });
  }

  changeLang() {
    this.currentLang = this.oppositeLang();
  }

  oppositeLang() {
    if (this.currentLang === 'esp') {
      return 'eng';
    } else {
      return 'esp';
    }
  }

  getText() {
    this.dataService.getText(this.name).subscribe(
      (text) => {
        this.textForm.setValue({ esp: text.esp, eng: text.eng });
        this.textData = text;
      },
      (error) => {
        this.status = 'loadingErr';
      }
    );
  }

  onSubmit() {
    if (this.textForm.invalid) {
      return;
    }
    this.dataService.postText(this.name, this.textForm.value.esp, this.textForm.value.eng).subscribe(
      (text) => {
        this.textData = text.text;
        this.status = 'success';
      },
      (error) => {
        console.log(error);
        this.status = 'postingErr';
      }
    );
  }
}
