import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './compo-hijo.component.html',
  styleUrl: './compo-hijo.component.css'
})
export class CompoHijoComponent {
@Input() data:any = {}; // Definir la propiedad que recibirá el valor
}
