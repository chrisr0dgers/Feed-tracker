import { Component, Input, OnInit } from '@angular/core';
import { Nappy } from 'src/app/nappy.model';

@Component({
  selector: 'app-nappy-timeline',
  templateUrl: './nappy-timeline.component.html',
  styleUrls: ['./nappy-timeline.component.scss'],
})
export class NappyTimelineComponent implements OnInit {
  @Input() nappyData: Nappy[];

  constructor() {}

  ngOnInit(): void {}
}
