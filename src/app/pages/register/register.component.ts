import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Estudiante } from '../../models/estudiante.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData: Estudiante = new Estudiante();

  constructor(private authService: AuthService, private router: Router) { }

  tiposDocumento: { id: number, nombre: string }[] = [
    { id: 1, nombre: 'Cédula de Ciudadanía' },
    { id: 2, nombre: 'Cédula de extranjería' },
    { id: 3, nombre: 'Pasaporte' },
    { id: 4, nombre: 'Tarjeta de identidad' }
  ]

  onRegister() {
    console.log('Los datos son: ', this.registerData)
    this.authService.registrarEstudiante(this.registerData).subscribe(response => {      
      alert('Registro exitoso.');
      this.router.navigate(['/login']);
    }, error => {
      if(error.status == 201){
        alert('Registro exitoso. Se asigna contraseña Temp123*');
        this.router.navigate(['/login']); // Redirige al dashboard
      }else if (error.status == 404){
        alert('Estudiante ya se encuentra creado, confirmar correo y número de documento.');        
      }else if (error.status == 402){
        alert('El registro es exitoso aunque ya se encuentra un login registrado con el correo.');
        this.router.navigate(['/login']);
      }else{
        alert('Se ha producido un error.');
      }
    });
  }
}
