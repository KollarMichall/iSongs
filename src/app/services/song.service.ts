import { EventEmitter, Injectable, Output } from '@angular/core';
import {Song} from '@app/types/index';
import { iTunesService } from './itunes.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  @Output() newSongsHaveArrived:EventEmitter<any>  = new EventEmitter();
  songs: Song[]= []
  constructor(private iTunes: iTunesService) { }

  getSongs(query: string){
    if (query) {
    this.iTunes.getData(query).subscribe(
      (data: any)=>{
       this.songs = data.results.filter((song: any) => song.kind == 'song').map((song:any) => this.extractData(song))
       this.newSongsHaveArrived.emit(this.songs)
      },
      (error: any)=>{
       console.log(error);

      }

    )

    }
  }
  extractData({
    trakId: id,
    trackName: title,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    collectionName: album


  }) {
    return{id, title, artist, audioFile, album, artwork}

  }

}
