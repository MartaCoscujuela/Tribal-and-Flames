import { Component, OnInit } from '@angular/core'
import { Colors } from '../../shared-components/enumColors'

@Component({
  selector: 'app-aboutanna',
  templateUrl: './aboutanna.component.html',
  styleUrls: ['./aboutanna.component.css']
})
export class AboutannaComponent implements OnInit {
  videoId = 482704655
  images = ['img-anna-intro-1', 'img-anna-intro-2', 'img-anna-intro-3']
  titleColor = Colors.red
  constructor() {}
  ngOnInit(): void {}
}
