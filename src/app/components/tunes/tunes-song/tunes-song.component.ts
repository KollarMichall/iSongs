import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Song } from '@app/types';

@Component({
  selector: 'tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss'],
  animations: [
    trigger('songAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.85)'
        }),
        animate('0.2s ease')
      ]),
      transition(':leave', [
        animate(
          '0.2s ease',
          style({
            opacity: 0,
            transform: 'scale(0.85)'
          })
        )
      ])
    ])
  ]
})
export class TunesSongComponent implements OnInit {
  @Input() song: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
