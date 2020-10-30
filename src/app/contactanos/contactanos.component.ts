
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MandarCorreosService } from '../service/mandar-correos.service';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  nombre='';
  correo='';
  mensaje='';

  constructor(private service:MandarCorreosService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  onSubmit() {
    alert("Gracias por contactarnos")
    this.dialog.closeAll()
  this.service.contactanos(this.nombre,this.mensaje, this.correo).subscribe(response=>{ response; ; 
    this.nombre='';
    this.correo='';
    this.mensaje='';
  
  })
    
  }


}
