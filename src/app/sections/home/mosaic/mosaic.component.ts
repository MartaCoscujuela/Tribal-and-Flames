import { Component, HostListener, OnInit } from '@angular/core';
import Player from '@vimeo/player';
import { DataService } from 'src/app/data-bridge/data.service';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.css']
})
export class MosaicComponent implements OnInit {

  constructor(public dataService: DataService) { }


  imgProfesora:string


  player2 : Player;

  playing = false;

  options = {
    id: 482704655,
    width: 1920,
    responsive: true,
    background: true
  };

  videoPlaying = false;
  clickedPlay = false;

  ngOnInit(): void {
    this.player2 = new Player('video2', this.options);
    this.dataService.getImg('img-home-mosaic-1').subscribe((response)=>{
      this.imgProfesora = response.esp
    }),
    error =>{
      console.log('error')
    };
  }

}
