import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { MainComponent2 } from './main/main.component';
import { FormComponent } from './form/form.component';
import { Usuario } from './interface.usuarios';
export { Usuario }


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ListaComponent, MainComponent2, FormComponent
  ]
})
export class UsuariosModule { }
