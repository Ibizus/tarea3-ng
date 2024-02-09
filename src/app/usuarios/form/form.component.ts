import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../usuarios.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  datosformulario:Usuario ={
    nombre:"",
    edad:18,
    profesion:""
  }

  constructor(private _usuariosService:UsuariosService){

  }

  onSubmit(f:NgForm){
    //console.log(f);
    //crearServicio(this.datosformulario);
    //crearServicio(f.value); // Esto es lo mismo que lo anterior, accediendo a los datso del formulario directamente, sin volcarlo en el typeScript
    this._usuariosService.crear(this.datosformulario);
    console.log(this._usuariosService);
  }
}
