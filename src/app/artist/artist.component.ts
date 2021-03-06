import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../artists';
import { Album } from '../album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ){}

 ngOnInit() {
   this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._spotifyService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist;
        })

      this._spotifyService.getAlbums(id)
        .subscribe(albums =>{
          this.albums = albums.items;
        })
    });
  }
}
