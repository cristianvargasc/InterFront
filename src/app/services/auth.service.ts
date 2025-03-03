import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7080/api';

  constructor(private http: HttpClient) { }

  login(correo: string, password: string): Observable<any> {        
    const params = new HttpParams()
      .set('correo', correo)
      .set('password', password);
    return this.http.get(`${this.baseUrl}/Login`, {params});
  }

  registrarEstudiante(estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(`${this.baseUrl}/Estudiante`, estudiante);
  }

  updatePassword(correo: string, password: string): Observable<any> {
    var id = 0;
    const body = {correo, password };
    return this.http.put<any>(`${this.baseUrl}/Login`, body);
  }
  
  updateStudent(estudiante: Estudiante): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Estudiante`, estudiante);  
  }

  getMaterias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Materia`);
  }

  inscribirMaterias(materias: any[]): Observable<any> {
    var correo = localStorage.getItem('correoEstudiante');
    if(correo == null){
      correo = ''
    }
    const params = new HttpParams()
    .set('correo', correo);
    return this.http.post<any>(`${this.baseUrl}/Inscripcion`, materias,{params});
  }

  getMateriasInscritas(): Observable<any[]> {
    var correo = localStorage.getItem('correoEstudiante');
    if(correo == null){
      correo = ''
    }

    const params = new HttpParams()
    .set('correo', correo);
    
    return this.http.get<any[]>(`${this.baseUrl}/Inscripcion`, {params});
  }
}
