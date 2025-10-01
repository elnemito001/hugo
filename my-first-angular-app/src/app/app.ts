import { Component } from '@angular/core';
import { CompoPadreComponent } from './componentes/compo-padre/compo-padre';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompoPadreComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
