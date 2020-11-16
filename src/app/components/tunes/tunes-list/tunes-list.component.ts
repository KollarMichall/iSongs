import { Component, OnInit, Input } from '@angular/core';
import { SongService } from '@app/services/song.service';
import {Song} from '@app/types'


@Component({
  selector: 'tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit{
  songs: Song

  constructor(private songService: SongService) { }


  ngOnInit(): void {
    this.songService.newSongsHaveArrived.subscribe(
      (data: any) =>{
      this.songs = data



  })
}


  }
