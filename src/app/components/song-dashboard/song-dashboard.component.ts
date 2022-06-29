import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-dashboard',
  templateUrl: './song-dashboard.component.html',
  styleUrls: ['./song-dashboard.component.css']
})
export class SongDashboardComponent implements OnInit {
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
