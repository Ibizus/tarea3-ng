import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuarios.module';
import { EventEmitter } from '@angular/core';


@Injectable({providedIn: 'root'})
export class UsuariosService {
    
    private _usuarios: Usuario[]= [
        {nombre: "Carlos", edad: 40, profesion: "Ingeniero"},
        {nombre: "Guillermo", edad: 30, profesion: "Programador"},
        {nombre: "David", edad: 28, profesion: "DevOps"},
        {nombre: "Cristian", edad: 23, profesion: "Programador"},
    ]

    usuariosChanged:EventEmitter<null>;

    constructor(){
        this.usuariosChanged = new EventEmitter;
    }
    

    getUsuarios():Usuario[]{
        return Array.from(this._usuarios);
    }


    eliminar(usuario:string):Usuario | null {

        let usuarioEliminado:Usuario | null;
        let pos=this._usuarios.findIndex((item)=> item.nombre.toLocaleLowerCase() == usuario.toLocaleLowerCase());
        console.log(pos, usuario.toLocaleLowerCase);

        if(pos>=0) {
            usuarioEliminado = this._usuarios[pos];
            this._usuarios.splice(pos, 1);
            this.usuariosChanged.emit(); // Avisamos de que cambia la lista
        }else{
            usuarioEliminado=null;
        }
        return usuarioEliminado;
    }


    crear(datos:Usuario){
        this._usuarios.push({...datos});
        this.usuariosChanged.emit(); // Avisamos de que cambia la lista
    }
}