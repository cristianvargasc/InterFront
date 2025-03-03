import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Estudiante } from '../../models/estudiante.model';
import { Router, RouterModule } from '@angular/router'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, CommonModule, RouterModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {
  
  estudiante: Estudiante = new Estudiante();

  tiposDocumento: { id: number, nombre: string }[] = [
    { id: 1, nombre: 'Cédula de Ciudadanía' },
    { id: 2, nombre: 'Cédula de extranjería' },
    { id: 3, nombre: 'Pasaporte' },
    { id: 4, nombre: 'Tarjeta de identidad' }
  ]

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Aquí puedes cargar los datos del estudiante si es necesario
  }

  onSubmit() {
    this.estudiante.Id = 0;
    this.estudiante.Creditos = 99;
    this.authService.updateStudent(this.estudiante).subscribe(response => {
      console.log('Datos actualizados exitosamente', response);
      alert('Datos actualizados correctamente');
      this.router.navigate(['/dashboard']);
    }, error => {
      if(error.status == 404){
        alert('No se encuentra estudiante registrado.');
      }else{
        alert('Ha ocurrido un error.');
      }
    });
  }
}
