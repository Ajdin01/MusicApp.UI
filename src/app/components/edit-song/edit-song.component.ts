import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  @Input() song?: Song
  @Output() songsUpdated = new EventEmitter<Song[]>();
  
  constructor(private songService: SongService) { }

  ngOnInit(): void {
  }

  updateSong(song: Song){
    this.songService.updateSong(song).subscribe((songs : Song[]) => this.songsUpdated.emit(songs));
  }
  deleteSong(song: Song){
    this.songService.deleteSong(song).subscribe((songs : Song[]) => this.songsUpdated.emit(songs));
  }
  createSong(song: Song){
    this.songService.createSong(song).subscribe((songs : Song[]) => this.songsUpdated.emit(songs));
  }

}
