import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'baby-tracker';

  feedFormVisible: boolean = false;

  toggleFeedForm() {
    this.feedFormVisible = !this.feedFormVisible;
    console.log(this.feedFormVisible);
  }

  showNappyForm() {
    alert('nappy form');
  }
}
