// Importamos Angular y el componente UserProfile que ya tienes
import { Component } from '@angular/core';
import { UserProfileComponent } from '../../componentes/user-profile/user-profile';

// Decorador del componente
@Component({
  selector: 'app-usuarios',
  standalone: true,
  // Importamos el componente UserProfile para usarlo aquí
  imports: [UserProfileComponent],
  templateUrl: './usuarios.html',    // ← SIN .component
  styleUrl: './usuarios.css'         // ← SIN .component
})
export class UsuariosComponent {
  // Este componente solo sirve como contenedor para mostrar UserProfile
}
