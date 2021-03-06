import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { TunesComponent } from './views/tunes/tunes.component';
import { TheNavigationComponent } from './components/the-navigation/the-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TunesSearchFormComponent } from './components/tunes/tunes-search-form/tunes-search-form.component';
import { TunesListComponent } from './components/tunes/tunes-list/tunes-list.component';
import { TunesSongComponent } from './components/tunes/tunes-song/tunes-song.component';
import { SongifyPipe } from './pipes/songify.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TunesComponent,
    TheNavigationComponent,
    TunesSearchFormComponent,
    TunesListComponent,
    TunesSongComponent,
    SongifyPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
