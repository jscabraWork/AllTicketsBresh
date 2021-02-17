import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpaycoTransaction } from 'src/app/models/epayco.model';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { EpaycoService } from 'src/app/service/epayco.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  refPayco: string = ''
	transactionResponse:any ;
  constructor(
    private epaycoService: EpaycoService,
    private activatedRoute: ActivatedRoute,
    private servicio:BoletasDataService
  ) {
    
   }

  ngOnInit(): void {

    this.servicio.entro().subscribe(response=>{
      response
    })
    this.activatedRoute.queryParams.subscribe(params => {
      this.refPayco= params['ref_payco'] || params['x_ref_payco'];
  });
   this.epaycoService.getTransactionResponse(this.refPayco)
   .subscribe((data: EpaycoTransaction) =>{
       this.transactionResponse = data.data
   });
  }

}
