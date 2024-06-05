import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public detailForm !: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createNewForm()
  }
  
  createNewForm(){
    this.detailForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      subject : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      message : new FormControl(null, [Validators.required]),
    })
  }
}
