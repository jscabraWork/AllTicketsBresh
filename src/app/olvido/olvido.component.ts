import { Component, OnInit } from '@angular/core';
import { UsuariosDataService } from '../service/data/usuarios-data.service';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.css'],
})
export class OlvidoComponent implements OnInit {
  errorMessage: string;
  correo: string;
  constructor(private servicio: UsuariosDataService) {}

  ngOnInit(): void {}

  enviar() {
    this.servicio.olvidoContrasenia(this.correo).subscribe((response) => {
      if(response){
        this.errorMessage = "Correo exitosamente enviado"
      }
      else{
        this.errorMessage = "Este correo no existe"
      }
    });
  }
}
