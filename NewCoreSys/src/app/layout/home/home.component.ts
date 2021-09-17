import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notifierService: NotifierService) { }

  ngOnInit(): void {
  }

  testMessage() {
    this.notifierService.showAlert("error", "ทดสอบ Messages", "");
  }
}
