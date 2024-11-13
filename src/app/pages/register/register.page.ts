import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  userEmail: string | null = null;

  constructor(private readonly authService: AuthService, private readonly router: Router, private readonly afAuth: AngularFireAuth) {}

  ngOnInit() {
    // Obtener el correo del usuario autenticado
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        console.log('Usuario registrado con éxito');
        this.router.navigate(['/login']);  
      })
      .catch(error => {
        alert('Error en el registro:');
      });
  }

  // Método para redirigir al login
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
