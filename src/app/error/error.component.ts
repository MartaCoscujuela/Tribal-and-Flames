import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  errorMessage: string;

  ngOnInit(): void {
   this.route.data.subscribe((data)=>{
    this.errorMessage = data["message"];
   });

  }

}
