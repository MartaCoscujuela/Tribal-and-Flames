import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tribal-and-flames';

  mainUp = false;
  mainUpMaxPos = 5;

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event:Event){
    if (window.pageYOffset > this.mainUpMaxPos){
      this.mainUp = true;
    } else {
      this.mainUp = false;
    }
  }
}
