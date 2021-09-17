import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ThemeService } from 'src/app/theme.service';

interface DialogData {
  reqValue: string;
  resValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean;
  selectedValue: string = "blue";
  modeValue: string = "light";
  @Output() openedSidenav: EventEmitter<any> = new EventEmitter();

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  modeClick() {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.modeValue = 'light' : this.modeValue = 'dark';
    this.themeService.updateTheme(this.modeValue, this.selectedValue);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { reqValue: this.selectedValue, resValue: this.selectedValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedValue = result.resValue;
      this.themeService.updateTheme(this.modeValue, this.selectedValue);
    });
  }

  sidenavActive() {
    this.openedSidenav.emit();
  }
}
