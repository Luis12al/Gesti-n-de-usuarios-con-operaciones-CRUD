import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],   // ← NECESARIO para *ngFor y *ngIf
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {

  usuarios: any[] = [];
  editando: any = null; // almacena usuario temporal

  constructor(private userService: UsuariosService) {}

  ngOnInit() {
    this.userService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }


  editar(usuario: any) {
    const nuevosDatos = { ...usuario };

    const nombres = prompt('Nuevo nombre:', usuario.nombres);
    if (nombres !== null) nuevosDatos.nombres = nombres;

    const tel = prompt('Nuevo teléfono:', usuario.telefono);
    if (tel !== null) nuevosDatos.telefono = tel;

    this.userService.actualizarUsuario(usuario.id, nuevosDatos)
      .then(() => alert('Usuario actualizado'))
      .catch(err => console.error(err));
  }

  eliminar(id: string) {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.userService.eliminarUsuario(id)
        .then(() => alert('Usuario eliminado'))
        .catch(err => console.error(err));
    }
  }
}
