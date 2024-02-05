import { Injectable } from '@angular/core';
import { Producto } from '../productos/productos.module';


@Injectable({providedIn: 'root'})
export class ProductosService {
    
    productos: Producto[]= [
        {nombre: "Bolígrafo", precio: 2.50, categoria: "Papelería"},
        {nombre: "Martillo", precio: 5, categoria: "Ferretería"},
        {nombre: "Cuaderno", precio: 3.50, categoria: "Papelería"},
        {nombre: "Regla", precio: 1.50, categoria: "Papelería"},
        {nombre: "Destornillador", precio: 4.50, categoria: "Ferretería"}
    ]
    
    constructor() { }
    
    eliminar(producto:string):Producto | null {

        let productoEliminado:Producto | null;
        let pos=this.productos.findIndex((item)=> item.nombre.toLocaleLowerCase() == producto.toLocaleLowerCase());
        console.log(pos, producto.toLocaleLowerCase);
        if(pos>=0) {
            productoEliminado = this.productos[pos];
            this.productos.splice(pos, 1);
        }else{
            productoEliminado=null;
        }
        return productoEliminado;
      }
}