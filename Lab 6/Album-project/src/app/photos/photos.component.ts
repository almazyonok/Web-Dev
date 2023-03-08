import { Component } from '@angular/core';
import {Photos} from "../photos";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent {
  photos:Photos[] = [];
  constructor(private albumService:AlbumService, private route:ActivatedRoute) {
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.albumService.getPhotos(id).subscribe((photos)=>{this.photos = photos;});
    })
  }

}