import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedHistoryComponent } from './pages/feed-history/feed-history.component';
import { HomeComponent } from './pages/home/home.component';
import { NappyHistoryComponent } from './pages/nappy-history/nappy-history.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'feed-history', component: FeedHistoryComponent },
  { path: 'nappy-history', component: NappyHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
