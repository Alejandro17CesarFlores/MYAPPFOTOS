import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  // Al cargar la página, obtener todas las fotos
  ngOnInit() {
    this.photos = this.photoService.getAllPhotos();
  }

  // Método para agregar una foto a la galería
  addPhotoToGallery() {
    this.photoService.takePhoto().then(() => {
      this.photos = this.photoService.getAllPhotos();
    });
  }

  // Método para eliminar una foto
  deletePhoto(filepath: string) {
    this.photoService.deletePhoto(filepath);
    this.photos = this.photoService.getAllPhotos();
  }
}
