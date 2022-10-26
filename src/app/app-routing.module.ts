import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedHistoryComponent } from './pages/feed-history/feed-history.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'feed-history', component: FeedHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
