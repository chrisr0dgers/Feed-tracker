import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'baby-tracker';
  active = 1;
  feedFormVisible: boolean = false;
  nappyFormVisible: boolean = false;

  toggleFeedForm() {
    this.feedFormVisible = !this.feedFormVisible;
    console.log(this.feedFormVisible);
  }

  toggleNappyForm() {
    this.nappyFormVisible = !this.nappyFormVisible;
  }
}
