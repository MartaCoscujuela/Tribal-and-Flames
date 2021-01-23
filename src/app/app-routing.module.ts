import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutribalComponent } from './sections/aboutribal/aboutribal.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { CourseComponent } from './sections/courses/course/course.component';
import { HomeComponent } from './sections/home/home.component';
import { ShowsComponent } from './sections/shows/shows.component';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutannaComponent } from './sections/aboutanna/aboutanna.component';
import { CrewComponent } from './sections/crew/crew.component';
import { DiscountsComponent } from './sections/discounts/discounts.component';

const routes: Routes = [

{
  path: "admin", loadChildren: ()=> import("./admin/admin.module").then(m => m.AdminModule)
},

{
  path: '', component: LayoutComponent, children: [
    {
      path: '',
      component: HomeComponent,
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
      path: 'cursos/:id',
      component: CourseComponent,
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
      component: HomeComponent,
    }
  ]
},
{
  path: 'not-found', component: ErrorComponent, data: {message: "404 Page not found"}
},

{
  path: "**", redirectTo: "not-found"
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling: "enabled",
    scrollPositionRestoration: "enabled",
    preloadingStrategy: PreloadAllModules
  })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
