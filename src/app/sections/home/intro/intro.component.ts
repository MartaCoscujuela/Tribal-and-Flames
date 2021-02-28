import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-bridge/data.service';
import { TextData } from 'src/app/data-bridge/text.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  textData: TextData = {name: '', esp: '', eng: ''};
  name = 'home-intro';
  lang = 'esp';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {

    this.getText();
  }

  getText(){
    this.dataService.getText(this.name).subscribe((text) => {
      this.textData = text;
    });
  }
}
