import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './compo-hijo.html',
  styleUrl: './compo-hijo.css'
})
export class CompoHijoComponent {
  @Input() data:any = {}; // Recibe datos del padre

  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); // Emite eventos al padre

  // Método que emite el evento al padre
  sendNotification() {
    const mensaje = `¡Hola desde el hijo! Soy ${this.data.nombre} ${this.data.apellido}`;
    this.notify.emit(mensaje);
  }
}
