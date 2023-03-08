import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './items';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { 
  }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }
  
  deleteAlbum(id:number):Observable<unknown>{
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(album:Album):Observable<Album>{
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  getPhotos(id:number):Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }


}
