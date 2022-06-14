import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BinDataService } from 'src/app/service/data/bin-data.service';
import { EpaycoService } from 'src/app/service/epayco.service';
import { Tarjeta } from './tarjeta.model';

@Component({
  selector: 'app-grupo-aval',
  templateUrl: './grupo-aval.component.html',
  styleUrls: ['./grupo-aval.component.css']
})
export class GrupoAvalComponent implements OnInit {

  token
  tarjeta:Tarjeta
  tokenT:string
  mask:string
  cargando:boolean
  bin
  mes
  anio
  constructor(private servicio:EpaycoService, private binservice: BinDataService, public dialogRef: MatDialogRef<GrupoAvalComponent>) { }

  ngOnInit(): void {
    this.cargando =true
    this.tarjeta = {
      cardNumber:null,
      cardExpYear:"",
      cardExpMonth:"",
      cardCvc:null,
    };
    

    this.servicio.login().subscribe(response=>{

      this.token = response.token;
      this.cargando = false
    })
  }

  manejar(){

    let arreglo=this.tarjeta.cardNumber.split(" ")
    this.tarjeta.cardNumber=""
    for(let i=0;i<arreglo.length;i++){
      if(arreglo[i]!=""){
        this.tarjeta.cardNumber+=arreglo[i]
      }
    }
    if(!this.cargando){
      this.cargando = true
    this.servicio.crearToken(this.token, this.tarjeta).subscribe(response=>{
      
        if(response.data.card){
      this.tokenT = response.data.id
      this.mask = response.data.card.mask
      this.bin = this.mask.split("*")[0]
      console.log(this.bin)

      this.binservice.getBin(this.bin).subscribe(response=>{

        if(response!=null){
          this.dialogRef.close(true)
        }
        else{
          this.dialogRef.close(false)
        }
      },
      error=>{
        error
        this.dialogRef.close(false)
      }
      )
    }
    else{
      alert(response.data.error.errors)
      this.cargando=false
    }
    },
    error=>{
      
      error
      this.dialogRef.close(false)
    })

  }
  else{
    alert("Cargando...")
  }
  }


}
