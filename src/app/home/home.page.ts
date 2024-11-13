import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../pages/image-modal/image-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public photos: Photo[] = [];
  userEmail: string | null = null;
  router: any;

  constructor(private readonly photoService: PhotoService, private readonly afAuth: AngularFireAuth, private readonly modalController: ModalController) {}

  // Al cargar la página, obtener todas las fotos
  ngOnInit() {
    this.photos = this.photoService.getAllPhotos();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  // Método para agregar una foto a la galería
  addPhotoToGallery() {
    this.photoService.takePhoto().then(() => {
      this.photos = this.photoService.getAllPhotos();
    });
  }
   // Método para abrir la imagen en pantalla completa
   async openImage(imagePath: string) {
      const modal = await this.modalController.create({
        component: ImageModalComponent,
        componentProps: { imagePath }
      });
      return await modal.present();
  }

  deletePhoto(filepath: string) {
    // Encuentra el índice de la foto
    const index = this.photos.findIndex(photo => photo.filepath === filepath);
    
    // Si se encuentra, elimina la foto
    if (index > -1) {
      this.photos.splice(index, 1);
      
    }
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);  // Redirige a la página de login
    }).catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  }
}
