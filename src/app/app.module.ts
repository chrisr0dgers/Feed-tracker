import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedFormComponent } from './components/feed-form/feed-form.component';
import { NappyFormComponent } from './components/nappy-form/nappy-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedHistoryComponent } from './components/feed-history/feed-history.component';
import { FeedTimelineComponent } from './components/feed-timeline/feed-timeline.component';
import { NappyHistoryComponent } from './components/nappy-history/nappy-history.component';
import { NappyTimelineComponent } from './components/nappy-timeline/nappy-timeline.component';

@NgModule({
  declarations: [AppComponent, FeedFormComponent, NappyFormComponent, FeedHistoryComponent, FeedTimelineComponent, NappyHistoryComponent, NappyTimelineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
