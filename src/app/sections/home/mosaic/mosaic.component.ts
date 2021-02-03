import { Component, OnInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.css']
})
export class MosaicComponent implements OnInit {

  constructor() { }

  player : Player;


  options = {
    id: 482704655,
    width: 1920,
    loop: false,
    controls: true,
    responsive: true,
    autoplay: false
  };


  ngOnInit(): void {
    this.player = new Player('video2', this.options);
    console.log("play");
    this.player.play();
  }

}
