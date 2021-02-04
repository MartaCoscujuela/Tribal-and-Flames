import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ImageSliderComponent } from './sections/home/image-slider/image-slider.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './sections/home/home.component';
import { AboutribalComponent } from './sections/aboutribal/aboutribal.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { AboutannaComponent } from './sections/aboutanna/aboutanna.component';
import { CrewComponent } from './sections/crew/crew.component';
import { DiscountsComponent } from './sections/discounts/discounts.component';
import { FaqComponent } from './sections/faq/faq.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ShowsComponent } from './sections/shows/shows.component';
import { CourseComponent } from './sections/courses/course/course.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from './error/error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VimeoComponent } from './vimeo/vimeo.component';
import { ParallaxComponent } from './sections/home/parallax/parallax.component';
import { StatementsComponent } from './sections/home/statements/statements.component';
import { CoursesGridComponent } from './sections/home/courses-grid/courses-grid.component';
import { MosaicComponent } from './sections/home/mosaic/mosaic.component';
import { IntroComponent } from './sections/home/intro/intro.component';
import { ClaimComponent } from './sections/home/claim/claim.component';
import { InstagramComponent } from './sections/home/instagram/instagram.component';
import { ContactComponent } from './sections/home/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageSliderComponent,
    HomeComponent,
    AboutribalComponent,
    CoursesComponent,
    AboutannaComponent,
    CrewComponent,
    DiscountsComponent,
    FaqComponent,
    MenuComponent,
    ShowsComponent,
    CourseComponent,
    LayoutComponent,
    ErrorComponent,
    VimeoComponent,
    ParallaxComponent,
    StatementsComponent,
    CoursesGridComponent,
    MosaicComponent,
    IntroComponent,
    ClaimComponent,
    InstagramComponent,
    ContactComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
