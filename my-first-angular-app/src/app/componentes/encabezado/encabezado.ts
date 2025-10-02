// Importamos lo necesario de Angular
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  // Importamos RouterLink para navegación, RouterLinkActive para marcar ruta activa, NgFor para el loop
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './encabezado.html',    // ← SIN .component
  styleUrl: './encabezado.css'         // ← SIN .component
})
export class EncabezadoComponent {
  // Array con las opciones del menú
  menu = [
    { label: 'Home', path: '/home' },           // Página principal
    { label: 'Usuarios', path: '/usuarios' },   // Página del CRUD
    { label: 'Acerca de', path: '/acerca' }     // Página de información
  ];
}
