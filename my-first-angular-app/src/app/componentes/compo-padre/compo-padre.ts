import { Component, Output,EventEmitter } from '@angular/core';
import { CompoHijoComponent } from "../compo-hijo/compo-hijo";

@Component({
  selector: 'app-compo-padre',
  standalone: true,
  imports: [CompoHijoComponent],
  templateUrl: './compo-padre.html',
  styleUrl: './compo-padre.css'
})
export class CompoPadreComponent {
  //mensaje = "Mensaje desde modelo padre";
  user = {
    nombre:"hugo",
    apellido:"larraga"
  }

}
