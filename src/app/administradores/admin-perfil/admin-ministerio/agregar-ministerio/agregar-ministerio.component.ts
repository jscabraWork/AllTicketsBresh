import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ministerio } from 'src/app/perfil-ministerio/ministerio.model';
import { MinisterioDataService } from 'src/app/service/data/ministerio-data.service';
import { Md5 } from 'ts-md5';

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
    var md5 = new Md5()

    var contra = this.ministerio.contrasena;
    this.ministerio.contrasena = md5.appendStr(contra).end().toString();
    this.service.crearMinisterios(this.ministerio).subscribe(response=>{response
    alert("Se creo el ministerio "+this.ministerio.usuario)
    this.router.navigate(['administradores/ministerios'])
    })
  }

}
