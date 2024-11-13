import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PhotoRepository } from '../core/repositories/photo.repository';  // Importar el repositorio
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private readonly photoRepository: PhotoRepository) {}  // Inyectar el repositorio

  // Método para tomar una foto y guardarla
  async takePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
    });

    const savedPhoto: Photo = {
      filepath: capturedPhoto.path || '',
      webviewPath: capturedPhoto.webPath || '',
    };

    // Guardar la foto en el repositorio
    this.photoRepository.savePhoto(savedPhoto);
  }

  // Método para obtener todas las fotos
  getAllPhotos(): Photo[] {
    return this.photoRepository.getPhotos();
  }

  // Método para eliminar una foto
  deletePhoto(filepath: string): void {
    this.photoRepository.deletePhoto(filepath);
  }
}
