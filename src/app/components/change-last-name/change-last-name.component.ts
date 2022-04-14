import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-last-name',
  templateUrl: './change-last-name.component.html',
  styleUrls: ['./change-last-name.component.css']
})
export class ChangeLastNameComponent   {

  constructor() { }
  changeLastNameForm = new FormGroup({
    newLastName: new FormControl(''),
  })

  errorMessage:string = ''

  changeLastName() { }


}
