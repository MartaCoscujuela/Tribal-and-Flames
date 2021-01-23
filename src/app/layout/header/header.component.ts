import { Component, Input } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserCircle} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //icons
  fafacebook = faFacebookSquare;
  fainsta = faInstagram;
  famail = faEnvelope;
  fayoutube = faYoutube;
  fauser = faUserCircle;
  @Input() headerHeight:number;
  @Input() imageTransition:number;

  constructor() { }
}
