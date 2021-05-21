import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EpaycoTransaction } from 'src/app/models/epayco.model';
import { Foto } from 'src/app/models/foto.model';
import { EventoDataService } from 'src/app/service/data/evento-data.service';
import { EpaycoService } from 'src/app/service/epayco.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css'],
  providers:[
    
  ]
})
export class RespuestaComponent implements OnInit {

  refPayco: string = ''
	transactionResponse:any ;
  url:Foto
  constructor(
    private epaycoService: EpaycoService,
    private activatedRoute: ActivatedRoute,
    private eventoService:EventoDataService

  ) {
    
   }

  ngOnInit(): void {

    this.url={
      id:null,
      name:null,
      url:null
    }

    this.activatedRoute.queryParams.subscribe(params => {
      this.refPayco= params['ref_payco'] || params['x_ref_payco'];
  });
   this.epaycoService.getTransactionResponse(this.refPayco)
   .subscribe((data: EpaycoTransaction) =>{
       this.transactionResponse = data.data


  
   });
  }

}