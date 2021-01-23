import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  sectionForm: FormGroup;

  constructor() { }
  text: string;


  ngOnInit(): void {
    this.sectionForm = new FormGroup({
      "description": new FormControl()
    });
  }

  onSubmit(){
  }
}
