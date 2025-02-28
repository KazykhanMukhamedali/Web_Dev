import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album, Photo } from '../models';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photo!: Photo[];

  constructor(private albumService: AlbumsService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(){
    this.route.paramMap.subscribe((params) => {
      const photoId: number = Number(params.get('id'))
      this.albumService.getPhoto(photoId).subscribe((photo) => {
        this.photo=photo;
      })
    })
  }
}
