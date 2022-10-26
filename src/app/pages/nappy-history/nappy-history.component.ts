import { Component, OnInit } from '@angular/core';
import { Nappy } from 'src/app/nappy.model';
import { NappyDataService } from 'src/app/services/nappy-data.service';

@Component({
  selector: 'app-nappy-history',
  templateUrl: './nappy-history.component.html',
  styleUrls: ['./nappy-history.component.scss']
})
export class NappyHistoryComponent implements OnInit {

  nappies: Nappy[];
  paginatedNappies;
  page = 1;
  pageSize = 7;

  constructor(private nappyDataService: NappyDataService) {}

  ngOnInit(): void {
    this.onFetchFeeds();
  }

  onFetchFeeds() {
    this.nappyDataService.fetchNappies().subscribe((savedNappies) => {
      this.nappies = savedNappies;
      this.refreshFeeds();
    });
  }

  refreshFeeds() {
    this.paginatedNappies = this.nappies
      .map((feed, i) => ({ id: i + 1, ...feed }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}

