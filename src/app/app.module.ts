import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedFormComponent } from './components/feed-form/feed-form.component';
import { NappyFormComponent } from './components/nappy-form/nappy-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedTimelineComponent } from './components/feed-timeline/feed-timeline.component';
import { NappyTimelineComponent } from './components/nappy-timeline/nappy-timeline.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedHistoryComponent } from './pages/feed-history/feed-history.component';
import { NavComponent } from './components/nav/nav.component';
import { NappyHistoryComponent } from './pages/nappy-history/nappy-history.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedFormComponent,
    NappyFormComponent,
    FeedTimelineComponent,
    NappyTimelineComponent,
    HomeComponent,
    FeedHistoryComponent,
    NavComponent,
    NappyHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
