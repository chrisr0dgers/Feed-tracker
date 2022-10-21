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
  feeds: Feed[] = [];
  lastFeed: Feed;
  lastFeedData = {};
  active = 1;
  feedFormVisible: boolean = false;
  nappyFormVisible: boolean = false;

  constructor(private feedDataService: FeedDataService) {}

  ngOnInit(): void {
    this.onFetchFeeds();
  }

  toggleFeedForm() {
    this.feedFormVisible = !this.feedFormVisible;
  }

  toggleNappyForm() {
    this.nappyFormVisible = !this.nappyFormVisible;
  }

  onFetchFeeds() {
    this.feedDataService.fetchFeeds().subscribe((savedFeeds) => {
      this.feeds = savedFeeds;
      this.lastFeed = savedFeeds.slice(-1)[0];

      const time = Math.abs(
        new Date(this.lastFeed.date).getTime() - new Date().getTime()
      );
      const mins = (time / (1000 * 60)).toFixed(1);

      this.lastFeedData = {
        ...this.lastFeed,
        ...this.convertTime(+mins),
      };
    console.log(this.lastFeedData);

    });
  }

  convertTime(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = Math.floor(mins % 60);
    console.log({ hours, minutes });
    return { hours, minutes };
  }
}
