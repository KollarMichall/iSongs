import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { SongService } from '@app/services/song.service';
import { debounce } from 'lodash-es';



@Component({
  selector: 'tunes-search-form',
  templateUrl: './tunes-search-form.component.html',
  styleUrls: ['./tunes-search-form.component.scss']
})
export class TunesSearchFormComponent implements OnInit {

  @Output() newSongHasArrived = new EventEmitter<string>();

  constructor(private songService: SongService) { }


  getMusic(query: string): void {
    this.songService.getSongs(query)
  }
  search = debounce((query: string): void => {
    this.getMusic(query)
  },550)

  ngOnInit(): void {


  }

}
