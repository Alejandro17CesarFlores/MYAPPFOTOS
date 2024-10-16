import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método para iniciar sesión
  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']);  // Redirige al home tras iniciar sesión
      })
      .catch(error => {
        console.log('Error en el inicio de sesión:', error);
      });
  }
}
