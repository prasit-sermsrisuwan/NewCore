import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isSidebarOpened = true;
  footerMargin = "250px;";
  constructor() { }

  ngOnInit(): void {
  }

  sidebarOpend() {
    this.isSidebarOpened = !this.isSidebarOpened;
    if (this.isSidebarOpened) this.footerMargin = "250px;";
    else this.footerMargin = "0px;";
  }
}
