import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoHijoComponent } from "../compo-hijo/compo-hijo";

@Component({
  selector: 'app-compo-padre',
  standalone: true,
  imports: [CommonModule, CompoHijoComponent],
  templateUrl: './compo-padre.html',
  styleUrl: './compo-padre.css'
})
export class CompoPadreComponent {
  user = {
    nombre: "hugo",
    apellido: "larraga"
  }

  mensajeDelHijo: string = ""; // Almacena el mensaje del hijo

  // Método que se ejecuta cuando el hijo emite el evento
  onNotify(mensaje: string) {
    this.mensajeDelHijo = mensaje;
    console.log('Mensaje recibido del hijo:', mensaje);
  }
}
