import {Injectable} from '@angular/core';
import {Firestore, collection, collectionData, addDoc} from '@angular/fire/firestore';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})
export class UsuariosService {

    private usuariosCollection : any;

    constructor(private firestore : Firestore) {
        this.usuariosCollection = collection(this.firestore, 'usuarios');        
    }

    crearUsuario(data: any) {
      return addDoc(this.usuariosCollection, data);
    }
    
    obtenerUsuarios() {
      return collectionData(this.usuariosCollection, { idField: 'id' }) as Observable<any[]>;
    }
}
