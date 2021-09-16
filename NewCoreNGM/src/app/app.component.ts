import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarOpened = true;
  sidebarToggler(){
    this.sidebarOpened = !this.sidebarOpened;
  }
}
