import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageSliderComponent } from './image-slider/image-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
