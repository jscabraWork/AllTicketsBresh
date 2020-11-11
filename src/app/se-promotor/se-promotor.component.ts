import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MandarCorreosService } from '../service/mandar-correos.service';

@Component({
  selector: 'app-se-promotor',
  templateUrl: './se-promotor.component.html',
  styleUrls: ['./se-promotor.component.css']
})
export class SePromotorComponent implements OnInit {
  documento='';
  nombre='';
  tipoDocumento='';
  fecha:Date
  celular='';
  correo='';

  haces='';
  porque='';
  gusta='';
  constructor(private service: MandarCorreosService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.solicitudPromotor(this.documento, this.nombre, this.tipoDocumento, this.fecha.toString(), this.celular, this.correo,  this.haces,this.porque, this.gusta).subscribe(response=>{
      response;
      
    })
    this.dialog.closeAll()
  }
}
