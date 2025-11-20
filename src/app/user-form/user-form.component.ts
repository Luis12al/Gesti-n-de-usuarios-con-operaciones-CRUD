import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  usuario = {
    nombres: '',
    primerApellido: '',
    segundoApellido: '',
    telefono: '',
    email: '',
    fechaNacimiento: ''
  };

  constructor(private userService: UsuariosService) {}

  guardar() {
    this.userService.crearUsuario(this.usuario)
      .then(() => {
        alert('Usuario registrado correctamente');
        this.usuario = {
          nombres: '',
          primerApellido: '',
          segundoApellido: '',
          telefono: '',
          email: '',
          fechaNacimiento: ''
        };
      })
      .catch(err => console.error(err));
  }
}
