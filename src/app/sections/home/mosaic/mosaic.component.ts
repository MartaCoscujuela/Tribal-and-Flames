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
    controls: false,
    responsive: true,
    autoplay: false
  };

  videoPlaying = false;
  clickedPlay = false;

  ngOnInit(): void {
    this.player = new Player('video2', this.options);

    this.player.on('ended',()=>{
      this.videoPlaying = false
    });
    this.player.on('play',()=>{
      if (!this.clickedPlay){
        this.player.pause();
      } else {
        this.videoPlaying = true;
      }
    });

    this.player.on('pause',()=>{
      this.videoPlaying = false
    });
  }

  onClick(){

    this.player.getPaused().then(paused => {
      if (paused){
        this.clickedPlay = true;
        this.player.play();
      } else {
        this.player.pause();
      }
    }).catch(error =>{
      console.log(error);
    })
  }
}
