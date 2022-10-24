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
  active = 1;
  // Feeds
  feeds: Feed[] = [];
  lastFeeds: Feed[]= [];
  // Nappys
  nappies: Nappy[];
  lastNappy: Nappy;
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

      for (let feed of savedFeeds.slice(-4)) {

        const time = Math.abs(
          new Date(feed.date).getTime() - new Date().getTime()
        );
        const mins = (time / (1000 * 60)).toFixed(1);

        feed = {
          ...feed,
          ...this.convertTime(+mins),
        };

        this.lastFeeds.push(feed);
      }
      this.lastFeeds = this.lastFeeds.reverse();

      console.log(this.lastFeeds);
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
      this.lastNappy = savedNappys.slice(-1)[0]
      console.log(savedNappys);
    });
  }
}
