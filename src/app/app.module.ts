import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ImageModalComponent } from './pages/image-modal/image-modal.component';

@NgModule({
  declarations: [AppComponent, ImageModalComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Inicializar Firebase
    AngularFireAuthModule,  // Módulo de autenticación
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
