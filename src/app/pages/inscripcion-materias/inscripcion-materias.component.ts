import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { response } from 'express';
import { Console } from 'console';

@Component({
  selector: 'app-inscripcion-materias',
  imports: [MatCheckboxModule, MatTableModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './inscripcion-materias.component.html',
  styleUrl: './inscripcion-materias.component.css'
})
export class InscripcionMateriasComponent implements OnInit {
  materias: any[] = [];
  selectedMaterias: any[] = [];
  displayedColumns: string[] = ['id', 'nombreMateria', 'idDocente', 'nombreDocente', 'select'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getMaterias().subscribe(data => {
      this.materias = data;
    });
  }

  onCheckboxChange(event: any, materia: any) {
    if (event.checked) {
      this.selectedMaterias.push(materia);
    } else {
      const index = this.selectedMaterias.findIndex(m => m.id === materia.id);
      if (index > -1) {
        this.selectedMaterias.splice(index, 1);
      }
    }
  }

  onSubmit() {    
    console.log('Recien seleccionado el boton: ', this.selectedMaterias)
    const materiasToInscribir = this.selectedMaterias.map(materia => ({
      id: materia.id,
      nombre: materia.nombreMateria,
      idDocente: materia.idDocente
    }));
    console.log('Materias a inscribir: ',materiasToInscribir);
    this.authService.inscribirMaterias(materiasToInscribir).subscribe(response => {
      alert('Materias inscritas exitosamente');
      this.router.navigate(['/dashboard']);
    }, error => {
      if(error.status == 200){
        alert('Materias inscritas exitosamente');
      this.router.navigate(['/dashboard']);
      }else if (error.status == 403){
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;          
        } else {
          // Error del lado del servidor
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        alert(error.error);        
      }else{
        alert('Ha ocurrido un error.');
      }
    });
  }
}