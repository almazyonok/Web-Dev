import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALBUMS } from "../temp-db";
import { Album } from "../items";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{
  album: Album;
  newAlbum: Album;
  constructor(private route: ActivatedRoute,
    private albumService: AlbumService) {
    this.album = {} as Album;
    this.newAlbum = {} as Album;
   }

  ngOnInit(): void{
    // const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      // this.album = ALBUMS.find((album) => album.id === id) as Album;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })

    
  }
  updateAlbum(){
    this.newAlbum.id = this.album.id;
    this.albumService.updateAlbum(this.newAlbum).subscribe((album)=>this.album = album);
    this.newAlbum = {} as Album;
  }

}
