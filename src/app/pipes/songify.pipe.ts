import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '@app/types';

@Pipe({
  name: 'songify'
})
export class SongifyPipe implements PipeTransform {

  transform(song: Song): string {
    return song.artist +'-'+song.album;
  }

}
