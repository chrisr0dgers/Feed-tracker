import { Component, OnInit } from '@angular/core';
import { Feed } from '../../feed.model';
import { Nappy } from '../../nappy.model';
import { FeedDataService } from '../../services/feed-data.service';
import { NappyDataService } from '../../services/nappy-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // boostrap tabs
  active = 1;
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

  fetchUpdatedFeeds(data: Feed) {
    data = {
      ...data,
      ...this.timeSinceLastFeed(data),
    };
    this.lastFeeds.unshift(data);
  }

  // This needs tidied
  onFetchFeeds() {
    this.feedDataService.fetchFeeds().subscribe((savedFeeds) => {
      this.feeds = savedFeeds;

      for (let feed of savedFeeds.slice(-10)) {
        feed = {
          ...feed,
          ...this.timeSinceLastFeed(feed),
        };

        this.lastFeeds.push(feed);
      }
      this.lastFeeds = this.lastFeeds.reverse();
    });
  }

  timeSinceLastFeed(feed) {
    const time = Math.abs(new Date().getTime() - Date.parse(feed.date));
    const mins = (time / (1000 * 60) + feed.duration).toFixed(1);
    let hours = Math.floor(+mins / 60);
    const minutes = Math.round(+mins % 60);

    if (new Date().toDateString() === new Date(feed.date).toDateString()) {
      this.todaysFeedCount++;
    }

    return { hours, minutes };
  }

  onFetchNappies() {
    this.nappyDataService.fetchNappies().subscribe((savedNappys) => {
      this.nappies = savedNappys;

      for (let nappy of this.nappies) {
        if (new Date().toDateString() === new Date(nappy.date).toDateString()) {
          this.todaysNappyCount++;
        }
        this.lastNappies.push(nappy);
      }
    });
  }
}
