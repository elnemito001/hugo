// Importamos lo necesario de Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Decorador que define este componente
@Component({
  selector: 'app-home',           // Nombre para usar en HTML: <app-home>
  standalone: true,               // Componente independiente
  imports: [CommonModule],        // CommonModule para usar *ngFor
  templateUrl: './home.html',     // ← SIN .component
  styleUrl: './home.css'          // ← SIN .component
})
export class HomeComponent {
  // Variables que puedes usar en el HTML
  nombre = 'Nestor Moises Castillo Bautista';
  edad = 21;
  carrera = 'Ingeniería en Desarrollo de Software';
  semestre = '7mo Semestre';

  // Puedes agregar tus hobbies o intereses
  intereses = [
    'Programación',
    'Videojuegos',
    'Música',
    'Tecnología'
  ];
}
