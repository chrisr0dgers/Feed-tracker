import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Nappy } from '../nappy.module';

@Injectable({
  providedIn: 'root',
})
export class NappyDataService {
  constructor(private http: HttpClient) {}

  saveNappy(nappy: Nappy) {
    this.http
      .post<{ name: string }>(
        'https://baby-tracker-d8eb7-default-rtdb.europe-west1.firebasedatabase.app/nappy.json',
        nappy
      )
      .subscribe();
  }

  fetchFeeds() {
    return this.http
      .get<Nappy[]>(
        'https://baby-tracker-d8eb7-default-rtdb.europe-west1.firebasedatabase.app/nappy.json'
      )
      .pipe(
        map((nappys) => {
          const nappyArray: Nappy[] = [];
          for (const nappy in nappys) {
            nappyArray.push(nappys[nappy]);
          }
          return nappyArray.reverse();
        })
      );
  }
}
