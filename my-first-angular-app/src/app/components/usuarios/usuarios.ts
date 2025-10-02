import { Component } from '@angular/core';
// ← Cambiado: ahora sube 2 niveles (..) en lugar de 1
import { UserProfileComponent } from '../../../componentes/user-profile/user-profile';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent {
}
