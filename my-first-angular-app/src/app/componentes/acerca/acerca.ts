// Importamos Angular y CommonModule para usar *ngFor
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule], // Necesario para *ngFor
  templateUrl: './acerca.html',    // ← SIN .component
  styleUrl: './acerca.css'         // ← SIN .component
})
export class AcercaComponent {
  // Información del proyecto
  nombreProyecto = 'Sistema de Gestión de Usuarios';
  version = '1.0.0';
  fecha = 'Octubre 2025';

  // Tecnologías utilizadas
  tecnologias = [
    { nombre: 'Angular', descripcion: 'Framework principal' },
    { nombre: 'TypeScript', descripcion: 'Lenguaje de programación' },
    { nombre: 'HTML5 & CSS3', descripcion: 'Estructura y estilos' },
    { nombre: 'Standalone Components', descripcion: 'Arquitectura moderna' }
  ];

  // Características del proyecto
  caracteristicas = [
    'Comunicación entre componentes con @Input y @Output',
    'Sistema de navegación con Angular Router',
    'CRUD completo de usuarios',
    'Diseño responsive y moderno',
    'Componentes reutilizables'
  ];
}
