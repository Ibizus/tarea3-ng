import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./cabecera/logo/logo.component";
import { MainComponent } from "./productos/main/main.component";
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MainComponent2 } from './usuarios/main/main.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LogoComponent, MainComponent, ProductosModule, UsuariosModule, MainComponent2] 
})
export class AppComponent {
  title = 'tarea3-ng';
}
