import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent {
  @Input() imagePath: string | undefined; // Recibe la ruta de la imagen para mostrarla en pantalla completa

  constructor(private readonly modalController: ModalController) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalController.dismiss();
  }
}