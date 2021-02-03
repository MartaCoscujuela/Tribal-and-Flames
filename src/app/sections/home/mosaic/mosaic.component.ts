import { Component, HostListener, OnInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.css']
})
export class MosaicComponent implements OnInit {

  constructor() { }

  player2 : Player;

  playing = false;

  options = {
    id: 482704655,
    width: 1920,
    loop: true,
    controls: false,
    responsive: true,
    autoplay: true,
    preload: true,
    muted: true
  };

  videoPlaying = false;
  clickedPlay = false;

  ngOnInit(): void {
    this.player2 = new Player('video2', this.options);
  }


  @HostListener("window:scroll")
  onWindowScroll(){
    if (!this.playing){
      this.player2.play();
      this.playing = true;
    }
  }

 onClick(){
/*
    this.player.getPaused().then(paused => {
      if (paused){
        this.clickedPlay = true;
        this.player.play();
      } else {
        this.player.pause();
      }
    }).catch(error =>{
      console.log(error);
    })*/
  }
}
