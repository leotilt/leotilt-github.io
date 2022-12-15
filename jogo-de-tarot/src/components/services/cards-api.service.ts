import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from 'src/components/config/cards';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsAPIService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<Cards[]> {
    return this.http.get<Cards[]>(
      'https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json'
    );
  }
}
