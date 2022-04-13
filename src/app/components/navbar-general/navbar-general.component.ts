import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar-general',
  templateUrl: './navbar-general.component.html',
  styleUrls: ['./navbar-general.component.css']
})
export class NavbarGeneralComponent  {

  constructor() {
    //Get rid of the constructor?
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }
}
