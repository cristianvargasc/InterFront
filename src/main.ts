import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { UpdatePassComponent } from './app/pages/update-pass/update-pass.component';
import path from 'path';
import { Component } from '@angular/core';
import { UpdateStudentComponent } from './app/pages/update-student/update-student.component';
import { InscripcionMateriasComponent } from './app/pages/inscripcion-materias/inscripcion-materias.component';
import { ConsultarMateriasComponent } from './app/pages/consultar-materias/consultar-materias.component';
import { VerMateriaComponent } from './app/pages/ver-materia/ver-materia.component';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'updatePass', component: UpdatePassComponent },
  { path: 'updateStudent', component: UpdateStudentComponent},
  { path: 'inscripcionMaterias', component: InscripcionMateriasComponent},
  { path: 'consultarMaterias', component: ConsultarMateriasComponent},
  { path: 'verMateria', component: VerMateriaComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
});
