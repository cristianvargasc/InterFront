import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-pass',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, CommonModule, RouterModule],
  templateUrl: './update-pass.component.html',
  styleUrl: './update-pass.component.css'
})
export class UpdatePassComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.updatePassword(this.email, this.password).subscribe(response => {
      this.router.navigate(['/dashboard']); // Redirige al dashboard      
    }, error => {
      if(error.status == 201){
        alert('Contraseña actualizada exitosamente.');
        this.router.navigate(['/dashboard']); // Redirige al dashboard
      }else if (error.status == 404){
        alert('No se encuentra correo.');
      }else{ 
        alert('Ha ocurrido un error');
      }
    });
  }
}