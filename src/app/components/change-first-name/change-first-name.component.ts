import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-first-name',
  templateUrl: './change-first-name.component.html',
  styleUrls: ['./change-first-name.component.css']
})
export class ChangeFirstNameComponent  {
  constructor() { }
  changeFirstNameForm = new FormGroup({
    newFirstName: new FormControl(''),
  })

  errorMessage:string = ''

  changeFirstName() { }


}
