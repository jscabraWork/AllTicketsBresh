import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ministerio } from 'src/app/perfil-ministerio/ministerio.model';
import { MinisterioDataService } from 'src/app/service/data/ministerio-data.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-update-ministerio',
  templateUrl: './update-ministerio.component.html',
  styleUrls: ['./update-ministerio.component.css']
})
export class UpdateMinisterioComponent implements OnInit {

  ministerio:Ministerio
  id
  contra
  constructor(private service:MinisterioDataService,  private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ministerio={
      contrasena:null,
      nombre:null,
      numeroDocumento:null,
      tipo:null,
      tipoDocumento:null,
      usuario:null
    }
    this.route.paramMap.subscribe(params=>{ this.id=params.get('id')});
    this.service.getMinisterioId(this.id).subscribe(response=>{
      this.ministerio =response
      this.contra = response.contrasena
    })
  }

  saveMinisterio(){

    if(this.ministerio.contrasena != this.contra){
      var md5 = new Md5()

      var contra = this.ministerio.contrasena;
      this.ministerio.contrasena = md5.appendStr(contra).end().toString();
    }

    this.service.modificarMinisterios(this.ministerio).subscribe(response=>{
      response
    alert("Se actualizo el ministerio "+this.ministerio.usuario)
    this.router.navigate(['administradores/ministerios'])

    })
  }

}
