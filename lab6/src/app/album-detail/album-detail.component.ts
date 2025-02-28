import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  title: string = '';

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService){
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const albumId: number = Number(params.get('id'))
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
      })
    } )
  }

  saveTitle(){
    this.album.title = this.title;
  }

}
