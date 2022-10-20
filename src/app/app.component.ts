import { Component, OnInit } from '@angular/core';
import { Feed } from './feed.module';
import { FeedDataService } from './services/feed-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'baby-tracker';
  feeds:Feed[] = []
  active = 1;
  feedFormVisible: boolean = false;
  nappyFormVisible: boolean = false;

  constructor(private feedDataService: FeedDataService) {}

  ngOnInit(): void {
    this.onFetchFeeds();
  }

  toggleFeedForm() {
    this.feedFormVisible = !this.feedFormVisible;
    console.log(this.feedFormVisible);
  }

  toggleNappyForm() {
    this.nappyFormVisible = !this.nappyFormVisible;
  }

  onFetchFeeds(){
    this.feedDataService.fetchFeeds().subscribe((savedFeeds) => {
      this.feeds = savedFeeds;
    })
  }
}
