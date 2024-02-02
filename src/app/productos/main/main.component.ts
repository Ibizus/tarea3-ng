import { Component } from '@angular/core';
import { ListadoComponent } from "../listado/listado.component";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [ListadoComponent, FormularioComponent]
})
export class MainComponent {

}
