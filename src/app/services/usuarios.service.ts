import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private coleccion = 'usuarios';

  constructor(private firestore: Firestore) {}


  crearUsuario(usuario: any) {
    const usuariosRef = collection(this.firestore, this.coleccion);
    return addDoc(usuariosRef, usuario);
  }


  obtenerUsuarios(): Observable<any[]> {
    const usuariosRef = collection(this.firestore, this.coleccion);
    return collectionData(usuariosRef, { idField: 'id' });
  }

  actualizarUsuario(id: string, usuario: any) {
    const usuarioRef = doc(this.firestore, `${this.coleccion}/${id}`);
    return updateDoc(usuarioRef, usuario);
  }

  eliminarUsuario(id: string) {
    const usuarioRef = doc(this.firestore, `${this.coleccion}/${id}`);
    return deleteDoc(usuarioRef);
  }
}
