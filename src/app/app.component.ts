import { Component, OnInit } from '@angular/core';
import { Feed } from './feed.module';
import { Nappy } from './nappy.module';
import { FeedDataService } from './services/feed-data.service';
import { NappyDataService } from './services/nappy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'baby-tracker';
  // boostrap tabs
  active = 2;
  // Feeds
  feeds: Feed[] = [];
  lastFeeds: Feed[] = [];
  todaysFeedCount: number = 0;
  // Nappys
  nappies: Nappy[];
  lastNappies: Nappy[] = [];
  todaysNappyCount: number = 0;
  // Popup states
  feedFormVisible: boolean = false;
  nappyFormVisible: boolean = false;

  constructor(
    private feedDataService: FeedDataService,
    private nappyDataService: NappyDataService
  ) {}

  ngOnInit(): void {
    this.onFetchFeeds();
    this.onFetchNappies();
  }

  toggleFeedForm() {
    this.feedFormVisible = !this.feedFormVisible;
  }

  toggleNappyForm() {
    this.nappyFormVisible = !this.nappyFormVisible;
  }

  // This needs tidied
  onFetchFeeds() {
    this.feedDataService.fetchFeeds().subscribe((savedFeeds) => {
      this.feeds = savedFeeds;

      for (let feed of savedFeeds.slice(-10)) {
        const time = Math.abs(
          new Date(feed.date).getTime() - new Date().getTime()
        );
        const mins = (time / (1000 * 60)).toFixed(1);
        if (new Date().toDateString() === new Date(feed.date).toDateString()) {
          this.todaysFeedCount++;
        }
        feed = {
          ...feed,
          ...this.convertTime(+mins),
        };

        this.lastFeeds.push(feed);
      }
      this.lastFeeds = this.lastFeeds.reverse();
    });
  }

  convertTime(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = Math.floor(mins % 60);
    return { hours, minutes };
  }

  onFetchNappies() {
    this.nappyDataService.fetchFeeds().subscribe((savedNappys) => {
      this.nappies = savedNappys;

      for (let nappy of this.nappies.slice(-10)) {
        if (new Date().toDateString() === new Date(nappy.date).toDateString()) {
          this.todaysNappyCount++;
        }
        this.lastNappies.push(nappy);
      }
    });
  }
}
