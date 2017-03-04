import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ){}


 ngOnInit() {
   this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._spotifyService.getAlbum(id)
        .subscribe(album => {
          this.album = album;
        })
    });
  }
}
