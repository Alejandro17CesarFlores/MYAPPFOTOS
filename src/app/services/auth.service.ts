
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly afAuth: AngularFireAuth) {}

 
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }


  getAuthState() {
    return this.afAuth.authState;
  }
}
