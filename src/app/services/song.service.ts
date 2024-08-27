import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private htpp: HttpClient) { }

  getSongs(): Observable<Song[]> {
    return this.htpp.get<Song[]>(`${environment.url}/songs`);
  }

  getSongById(id: number|string): Observable<Song> {
    return this.htpp.get<Song>(`${environment.url}/songs/${id}`);
  }
}
