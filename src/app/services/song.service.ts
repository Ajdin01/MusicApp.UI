import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private url = "Songs"

  constructor(private http: HttpClient) { 
    
  }

  public getSong() : Observable<Song[]> {
    return this.http.get<Song[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateSong(song : Song) : Observable<Song[]> {
    return this.http.put<Song[]>(
      `${environment.apiUrl}/${this.url}`,
      song
      );
  }

  public createSong(song : Song) : Observable<Song[]> {
    return this.http.post<Song[]>(
      `${environment.apiUrl}/${this.url}`,
      song
      );
  }

  public deleteSong(song: Song) : Observable<Song[]> {
    return this.http.get<Song[]>(`${environment.apiUrl}/${this.url}/${song.songID}`);
  }

  
}
