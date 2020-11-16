import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class iTunesService {

  constructor(private httpClient: HttpClient) { }
  private url: string =`
  https://itunes.apple.com/search
            ?term=%QUERY%
            &entity=musicTrack
            &limit=5
  `

  getData(query: string){
    const url: string = this.url.replace('%QUERY%', encodeURI( query )).replace(/\s/g, '')
    return this.sendRequest(url)
  }
  sendRequest(url: string) {
    return this.httpClient.get(url)
  }

}