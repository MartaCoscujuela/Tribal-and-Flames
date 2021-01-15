import { Component, OnInit, HostListener } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserCircle} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //icons
  fafacebook = faFacebookSquare;
  fainsta = faInstagram;
  famail = faEnvelope;
  fayoutube = faYoutube;
  fauser = faUserCircle;

  //vars to control header anim
  maxHeaderHeight = 400;
  headerHeight = this.maxHeaderHeight;
  breakpointHeaderShrink = 300;
  imageTransition = 1;

  constructor() { }

  ngOnInit(){
    this.shrinkHeader();

  }

  doSomethingOnWindowsScroll($event:Event){
    this.shrinkHeader();
  }

  shrinkHeader(){
    const offset = window.pageYOffset;

    if (offset < this.breakpointHeaderShrink){
      this.headerHeight = this.maxHeaderHeight - offset;

      this.imageTransition = 1-(offset/this.breakpointHeaderShrink);


      console.log(this.imageTransition);
    } else {
      this.headerHeight = this.maxHeaderHeight - this.breakpointHeaderShrink;
      this.imageTransition = 0;
    }
  }
}
