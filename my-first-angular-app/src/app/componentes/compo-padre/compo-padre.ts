import { Component, Output,EventEmitter } from '@angular/core';
import { CompoHijoComponent } from "../compo-hijo/compo-hijo.component";

@Component({
  selector: 'app-compo-padre',
  standalone: true,
  imports: [CompoHijoComponent],
  templateUrl: './compo-padre.component.html',
  styleUrl: './compo-padre.component.css'
})
export class CompoPadreComponent {
  //mensaje = "Mensaje desde modelo padre";
  user = {
    nombre:"hugo",
    apellido:"larraga"
  }

}
