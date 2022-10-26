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
  page = 1;
  pageSize = 7;

  constructor(private feedDataService: FeedDataService) {}

  ngOnInit(): void {
    this.onFetchFeeds();
  }

  onFetchFeeds() {
    this.feedDataService.fetchFeeds().subscribe((savedFeeds) => {
      this.feeds = savedFeeds.reverse();
      this.refreshFeeds();
    });
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
