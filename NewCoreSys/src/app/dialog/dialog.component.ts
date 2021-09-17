import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  reqValue: string;
  resValue: string;
}

interface Theme {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  selectValue: string = "";
  
  themes: Theme[] = [
    { value: 'blue', viewValue: 'Blue - Green' },
    { value: 'purple', viewValue: 'Purple - Orange' }
  ];
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { 

  }

  ngOnInit(): void {
    this.selectValue = this.data.reqValue;
  }

}
