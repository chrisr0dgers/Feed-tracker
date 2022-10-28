import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { FeedDataService } from 'src/app/services/feed-data.service';

@Component({
  selector: 'app-feed-history',
  templateUrl: './feed-history.component.html',
  styleUrls: ['./feed-history.component.scss'],
})
export class FeedHistoryComponent implements OnInit {
  feeds: Feed[];
  paginatedFeeds;
  collectionLength: number;
  page = 1;
  pageSize = 7;

  constructor(private feedDataService: FeedDataService) {
  }

  ngOnInit(): void {
    this.feedDataService.fetchFeeds();
    this.feedDataService.feeds.subscribe((feeds) => {
      this.feeds = feeds;
      this.collectionLength = this.feeds.length;
      this.refreshFeeds();
    });
  }

  onFetchFeeds() {
    this.feedDataService.fetchFeeds();
  }

  refreshFeeds() {
    this.paginatedFeeds = this.feeds
      .map((feed, i) => ({ id: i + 1, ...feed }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
