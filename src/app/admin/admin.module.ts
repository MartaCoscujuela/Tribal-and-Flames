import { NgModule } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSectionsComponent } from './admin-sections/admin-sections.component';
import { AdminComponent } from './admin.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-sections/admin-home/admin-home.component';
import { AdminAboutComponent } from './admin-sections/admin-about/admin-about.component';
import { AdminCoursesComponent } from './admin-sections/admin-courses/admin-courses.component';
import { AdminAnnademasComponent } from './admin-sections/admin-annademas/admin-annademas.component';
import { AdminCrewComponent } from './admin-sections/admin-crew/admin-crew.component';
import { AdminDiscountsComponent } from './admin-sections/admin-discounts/admin-discounts.component';
import { AdminShowsComponent } from './admin-sections/admin-shows/admin-shows.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminCourseComponent } from './admin-sections/admin-course/admin-course.component';
import { TexteditorComponent } from './utils/texteditor/texteditor.component';
import { ImgEditorComponent } from './utils/images-container/img-editor/img-editor.component';
import { ImagesContainerComponent } from './utils/images-container/images-container.component';
import { ErrorComponent } from './utils/error/error.component';
import { ImgListComponent } from './utils/img-list/img-list.component';
import { SingleImgComponent } from './utils/img-list/single-img/single-img.component';



@NgModule({
  declarations: [
  AdminSectionsComponent,
  AdminComponent,
  AdminMenuComponent,
  AdminHeaderComponent,
  AdminHomeComponent,
  AdminAboutComponent,
  AdminCoursesComponent,
  AdminAnnademasComponent,
  AdminCrewComponent,
  AdminDiscountsComponent,
  AdminShowsComponent,
  AdminCourseComponent,
  TexteditorComponent,
  ImgEditorComponent,
  ImagesContainerComponent,
  ErrorComponent,
  ImgListComponent,
  SingleImgComponent,
],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class AdminModule { }
