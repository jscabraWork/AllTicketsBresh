import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ministerio } from 'src/app/perfil-ministerio/ministerio.model';
import { MinisterioDataService } from 'src/app/service/data/ministerio-data.service';

@Component({
  selector: 'app-agregar-ministerio',
  templateUrl: './agregar-ministerio.component.html',
  styleUrls: ['./agregar-ministerio.component.css']
})
export class AgregarMinisterioComponent implements OnInit {

  ministerio:Ministerio
  constructor(private service:MinisterioDataService,  private router:Router) { }

  ngOnInit(): void {
    this.ministerio={
      contrasena:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null
    }
  }

  saveMinisterio(){
    this.service.crearMinisterios(this.ministerio).subscribe(response=>{response
    alert("Se creo el ministerio "+this.ministerio.usuario)
    this.router.navigate(['administradores/ministerios'])
    })
  }

}
