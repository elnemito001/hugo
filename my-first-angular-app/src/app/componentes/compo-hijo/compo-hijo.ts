import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './compo-hijo.html',
  styleUrl: './compo-hijo.css'
})
export class CompoHijoComponent {
@Input() data:any = {}; // Definir la propiedad que recibirá el valor
}
