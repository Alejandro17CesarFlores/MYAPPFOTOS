import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método para registrar un nuevo usuario
  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        console.log('Usuario registrado con éxito');
        this.router.navigate(['/home']);  // Redirige al inicio tras el registro
      })
      .catch(error => {
        console.log('Error en el registro:', error);
      });
  }
}

