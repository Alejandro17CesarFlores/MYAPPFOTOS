import { Injectable } from '@angular/core';
import { Photo } from '../../models/photo.model';  // Importar el modelo

@Injectable({
  providedIn: 'root',
})
export class PhotoRepository {
  private photos: Photo[] = [];  // Almacén temporal de fotos

  // Método para guardar una nueva foto
  savePhoto(photo: Photo): void {
    this.photos.push(photo);
  }

  // Método para obtener todas las fotos
  getPhotos(): Photo[] {
    return this.photos;
  }

  // Método para obtener una foto por su filepath
  getPhotoByPath(filepath: string): Photo | undefined {
    return this.photos.find(photo => photo.filepath === filepath);
  }

  // Método para eliminar una foto
  deletePhoto(filepath: string): void {
    this.photos = this.photos.filter(photo => photo.filepath !== filepath);
  }
}
