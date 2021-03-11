import { Component, OnInit } from '@angular/core'
import { Colors } from 'src/app/sections/enums/enumColors'
import { Fonts } from 'src/app/sections/enums/enumFonts'

@Component({
  selector: 'app-contratanos',
  templateUrl: './contratanos.component.html',
  styleUrls: ['./contratanos.component.css']
})
export class ContratanosComponent implements OnInit {
  titleColor = Colors.white
  titleFont = Fonts.century

  constructor() {}

  ngOnInit(): void {}
}
