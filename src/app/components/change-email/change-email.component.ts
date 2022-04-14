import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent {

 constructor() { }
  changeEmailForm = new FormGroup({
    newEmail: new FormControl(''),
  })

  errorMessage:string = ''

  changeEmail() { }


}
