import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Feed } from '../feed.module';

@Injectable({
  providedIn: 'root',
})
export class FeedDataService {
  constructor(private http: HttpClient) {}

  saveFeed(feed: Feed) {
    this.http.post<{ name: string }>(
      'https://baby-tracker-d8eb7-default-rtdb.europe-west1.firebasedatabase.app/feeds.json',
      feed
    ).subscribe();
    this.fetchFeeds();
  }

  fetchFeeds() {
    return this.http
      .get<Feed[]>(
        'https://baby-tracker-d8eb7-default-rtdb.europe-west1.firebasedatabase.app/feeds.json'
      )
      .pipe(
        map((feeds) => {
          const feedArray: Feed[] = [];
          for (const feed in feeds) {
            feedArray.push(feeds[feed]);
          }
          return feedArray;
        })
      );
  }
}
