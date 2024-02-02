import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./cabecera/logo/logo.component";
import { MainComponent } from "./productos/main/main.component";
import { ProductosModule } from './productos/productos.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LogoComponent, MainComponent, ProductosModule] 
})
export class AppComponent {
  title = 'tarea3-ng';
}
