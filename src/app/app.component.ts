import { Component } from '@angular/core';
import { Song } from './models/song';
import { SongService } from './services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicApp.UI';

  songs: Song[] = [];

  songToEdit?: Song;

  constructor(private songService: SongService){}

  ngOnInit() : void {
    console.log(this.songs);
    

    this.songService.getSong().subscribe(
      (result: Song[]) => (this.songs = result)
    );
    
  }

  updatedSongList(songs: Song[]){
    this.songs = songs;
  }

  initNewSong(){
    this.songToEdit = new Song();
  }

  editSong(song: Song){
    this.songToEdit = song;
  }
}
