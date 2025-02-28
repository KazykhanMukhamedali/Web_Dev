import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album
  loaded = false;
  constructor(private albumService: AlbumsService){
    this.newAlbum = {
      id: 101,
      title: ''
    }
  }

  ngOnInit(): void {
      this.getAlbums();
  }

  addAlbum(){
    this.albumService.addAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.push(album);
    })
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(p => p.id !== id)
    this.albumService.deleteAlbum(id).subscribe()
  }
}
