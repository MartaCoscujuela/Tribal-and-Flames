import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { MainComponent } from './main/main.component';
import { StudentsComponent } from './students/students.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutannaComponent } from './sections/aboutanna/aboutanna.component';
import { AbouttribalComponent } from './sections/abouttribal/abouttribal.component';
import { CrewComponent } from './sections/crew/crew.component';
import { CursosComponent } from './sections/cursos/cursos.component';
import { DiscountsComponent } from './sections/discounts/discounts.component';
import { FaqComponent } from './sections/faq/faq.component';
import { HomeComponent } from './sections/home/home.component';


@NgModule({
  declarations: [

  MainComponent,

  StudentsComponent,

  SectionsComponent,

  AboutannaComponent,

  AbouttribalComponent,

  CrewComponent,

  CursosComponent,

  DiscountsComponent,

  FaqComponent,

  HomeComponent],
  imports: [
    BrowserModule,
    BackofficeRoutingModule
  ],

})
export class BackofficeModuleModule { }
