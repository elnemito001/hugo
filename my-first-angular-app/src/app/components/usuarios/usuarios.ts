import { Component } from '@angular/core';
import { UserProfileComponent } from '../../componentes/user-profile/user-profile';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent {
}
