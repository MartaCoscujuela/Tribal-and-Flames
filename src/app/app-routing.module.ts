import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutannaComponent } from './backoffice/sections/aboutanna/aboutanna.component';
import { CrewComponent } from './backoffice/sections/crew/crew.component';
import { DiscountsComponent } from './backoffice/sections/discounts/discounts.component';
import { FaqComponent } from './backoffice/sections/faq/faq.component';
import { AboutribalComponent } from './sections/aboutribal/aboutribal.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { HomeComponent } from './sections/home/home.component';
import { ImageSliderComponent } from './sections/home/image-slider/image-slider.component';
import { ShowsComponent } from './sections/shows/shows.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: "backoffice", loadChildren: ()=> import("./backoffice/backoffice.module").then(m => m.BackofficeModuleModule)
  },
  {
    path: 'about',
    component: AboutribalComponent,
  },
  {
    path: 'cursos',
    component: CoursesComponent,
  },
  {
    path: 'annademas',
    component: AboutannaComponent,
  },
  {
    path: 'crew',
    component: CrewComponent,
  },
  {
    path: 'shows',
    component: ShowsComponent,
  },
  {
    path: 'descuentos',
    component: DiscountsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
