import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/data-bridge/data.service';
import { ListData } from 'src/app/data-bridge/list.model';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css'],
})
export class TextListComponent implements OnInit {
  public form: FormGroup;
  status: string;
  name = 'intro';
  currentLang = 'esp';

  iconTimes = faTimes;
  constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      sentences: this.formBuilder.array([this.formBuilder.control('', [Validators.required])]),
    });
  }

  get sentences() {
    return this.form.get('sentences') as FormArray;
  }

  addSentence() {
    this.sentences.push(this.formBuilder.control('', [Validators.required]));
    this.status = '';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.status = 'postingErr';
      return;
    }

    const sentences: ListData = { name: this.name, esp: this.sentences.value, eng: this.sentences.value };
    this.dataService.postSentences(sentences).subscribe((response) => {
      console.log(response);
    });
  }

  deleteItem(index: number) {
    this.sentences.removeAt(index);
  }
}
