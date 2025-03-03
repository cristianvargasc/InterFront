import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {

    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => 
        {
          this.router.navigate(['/dashboard']); // Redirige al dashboard
        },
      error: (error) => 
        {
          if(error.status == 200){
            localStorage.setItem('correoEstudiante', this.loginData.email)
            console.log('Se agrega a localstorage con valor: ', localStorage.getItem('correoEstudiante'));
            this.router.navigate(['/dashboard']); // Redirige al dashboard
          }else if (error.status == 203){
            alert('Credenciales incorrectas.');
          }else if (error.status == 404){
            alert('No se encuentra correo.');
          }else {
            alert('Se ha producido un error.');
          }
        }
    });
  }

  irARegistro() {
    this.router.navigate(['/register']); // Redirigir a registro
  }
}
