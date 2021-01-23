import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        console.log(params["id"]);
      }
    );

    this.route.fragment.subscribe(
      (fragment: string) => {
        console.log(fragment);
      }
    );
  }

  ngOnDestroy(): void{

  }

}
