import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../items';
import { ALBUMS } from '../temp-db';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;

  constructor(private albumService: AlbumService){
    this.albums = [];
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums();

  }

  getAlbums(){
    // this.albums = ALBUMS;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album) =>{
    this.albums.unshift(album);
    this.newAlbum = {} as Album;
    });
  }

  deleteAlbum(id:number){
    this.albumService.deleteAlbum(id).subscribe();
    this.albums = this.albums.filter(album => album.id != id);
  }

}
