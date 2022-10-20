import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedFormComponent } from './componets/feed-form/feed-form.component';
import { NappyFormComponent } from './componets/nappy-form/nappy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedFormComponent,
    NappyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
