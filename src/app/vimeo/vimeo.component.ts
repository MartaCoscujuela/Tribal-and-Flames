import { Component, Input, OnInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css'],
})
export class VimeoComponent implements OnInit {
  @Input() videoId: number;

  player: Player;
  videoPlaying = false;

  clickedPlay = false;

  options = {
    id: 0,
    width: 960,
    loop: false,
    controls: false,
    responsive: true,
    autoplay: true,
    preload: true,
  };

  ngOnInit(): void {
    this.options.id = this.videoId;
    this.player = new Player('video', this.options);
    this.player.on('ended', () => {
      this.videoPlaying = false;
    });
    this.player.on('play', () => {
      if (!this.clickedPlay) {
        this.player.pause();
      } else {
        this.videoPlaying = true;
      }
    });

    this.player.on('pause', () => {
      this.videoPlaying = false;
    });
  }

  onClick(): void {
    this.player
      .getPaused()
      .then((paused) => {
        if (paused) {
          this.clickedPlay = true;
          this.player.play();
        } else {
          this.player.pause();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
