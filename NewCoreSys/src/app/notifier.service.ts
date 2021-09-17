import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) { }

  showAlert(vType: "info" | "warn" | "success" | "error", vMessage: string, vButtonText: string) {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: {type: 'alert', message: vMessage, button: vButtonText, event: vType},
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: vType
    });
  }
}
