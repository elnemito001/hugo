// Importamos Routes de Angular Router
import { Routes } from '@angular/router';

// Importamos los 3 componentes (NOTA: los archivos se llaman .ts SIN .component)
import { HomeComponent } from './components/home/home';
import { UsuariosComponent } from './components/usuarios/usuarios';
import { AcercaComponent } from './components/acerca/acerca';

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Ruta raíz ('/') redirige automáticamente a /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Ruta /home muestra HomeComponent
  { path: 'home', component: HomeComponent },

  // Ruta /usuarios muestra UsuariosComponent (con tu CRUD)
  { path: 'usuarios', component: UsuariosComponent },

  // Ruta /acerca muestra AcercaComponent
  { path: 'acerca', component: AcercaComponent },

  // Si alguien escribe una ruta que no existe, redirige a /home
  { path: '**', redirectTo: '/home' }
];
