import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Usuario } from '../usuarios.module';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  usuarios:Usuario[]=[];
  eliminado: Usuario|null = null;
  encontrado: boolean=true;

  constructor(private _usuariosServicios:UsuariosService){

    this.usuarios = _usuariosServicios.getUsuarios();

    // Cuando se emita evento volvemos a cargr el listado:
    this._usuariosServicios.usuariosChanged.subscribe(()=>{ 
      this.usuarios = _usuariosServicios.getUsuarios();
    })
  }

  eliminar(usuario:string):void {
    this.eliminado = this._usuariosServicios.eliminar(usuario);
    this.encontrado = (this.eliminado!=null);

    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }

}
