import { Component, OnInit } from '@angular/core';
import { Ministerio } from 'src/app/perfil-ministerio/ministerio.model';
import { MinisterioDataService } from 'src/app/service/data/ministerio-data.service';

@Component({
  selector: 'app-admin-ministerio',
  templateUrl: './admin-ministerio.component.html',
  styleUrls: ['./admin-ministerio.component.css']
})
export class AdminMinisterioComponent implements OnInit {
  message: string
  ministerios:Ministerio[]=[]
  constructor(private servicio:MinisterioDataService) { }

  ngOnInit(): void {

   this.refrescar();

  }

  borrarMinisterio(numerodocumento){

    this.servicio.deleteMinisterioId(numerodocumento).subscribe(response=>{
      response;
      this.message= "Se borro el ministerio " + numerodocumento
      this.refrescar()
    })
  }

  refrescar(){
    this.servicio.getAllMinisterio().subscribe(response=>{
      this.ministerios = response

    })
  }
}
