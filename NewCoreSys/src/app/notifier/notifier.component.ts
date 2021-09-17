import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {
  title: string = "";
  showButton = true;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBarRef: MatSnackBarRef<NotifierComponent>) { }

  ngOnInit(): void {

    switch(this.data.event){
      case "info": this.title = "information"; break;
      case "warn": this.title = "warning"; break;
      case "success": this.title = "success"; break;
      case "error": this.title = "error"; break;
      default: this.title = "confirmation"; break;
    }
    this.showButton = this.data.button !== "";
  }

}
