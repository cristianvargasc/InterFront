import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-consultar-materias',
  imports: [CommonModule, MatTableModule],
  templateUrl: './consultar-materias.component.html',
  styleUrl: './consultar-materias.component.css'
})
export class ConsultarMateriasComponent implements OnInit {
  materias: any[] = [];
  displayedColumns: string[] = ['id', 'nombreMateria', 'nombreDocente', 'fechaInscripcion', 'verMateria'];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getMateriasInscritas().subscribe(data => {
      this.materias = data;
    });
  }

  verMateria(id: number) {
    this.router.navigate(['/ver-materia', id]);
  }
}