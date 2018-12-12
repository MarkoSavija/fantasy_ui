import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player-details/player.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class PlayerService {

  constructor (private http: HttpClient) {}

  getAllPlayers() {
      return this.http.get('http://localhost:8080/api/players')
        .pipe(
          map((data: Player []) => {
            return data;
          }));
  }

}
