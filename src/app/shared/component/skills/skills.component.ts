import { Component, OnInit } from '@angular/core';
import { skillsArr } from '../../const/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillsArray : any[]= skillsArr
  constructor() { }

  ngOnInit(): void {
    console.log(this.skillsArray);
    
  }

}
