import { Component, OnInit } from '@angular/core';
import { educArray } from '../../const/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public eduArray : any[] = educArray
  constructor() { }

  ngOnInit(): void {
    console.log(this.eduArray);
    
  }

}
