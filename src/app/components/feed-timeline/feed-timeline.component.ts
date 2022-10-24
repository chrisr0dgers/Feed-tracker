import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.module';

@Component({
  selector: 'app-feed-timeline',
  templateUrl: './feed-timeline.component.html',
  styleUrls: ['./feed-timeline.component.scss']
})
export class FeedTimelineComponent implements OnInit {
  @Input() feedData: Feed[];

  constructor() { }

  ngOnInit(): void {
  }

}
