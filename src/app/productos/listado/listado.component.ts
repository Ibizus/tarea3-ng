import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Producto } from '../productos.module';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})

export class ListadoComponent {

  productos:Producto[]=[];
  eliminado: Producto|null = null;
  encontrado: boolean=true;

  constructor(private _productosServicios:ProductosService){

    this.productos = _productosServicios.getProductos();

    // Cuando se emita evento volvemos a cargr el listado:
    this._productosServicios.productosChanged.subscribe(()=>{ 
      this.productos = _productosServicios.getProductos();
    })
  }

  eliminar(producto:string):void {
    this.eliminado = this._productosServicios.eliminar(producto);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }

}