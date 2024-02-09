import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../productos.module';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgIf],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  datosformulario:Producto ={
    nombre:"",
    precio:0,
    categoria:""
  }

  constructor(private _productosService:ProductosService){

  }

  onSubmit(f:NgForm){
    //console.log(f);
    //crearServicio(this.datosformulario);
    //crearServicio(f.value); // Esto es lo mismo que lo anterior, accediendo a los datso del formulario directamente, sin volcarlo en el typeScript
    this._productosService.crear(this.datosformulario);
    console.log(this._productosService);
  }
}
