import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  mensaje
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.mensaje = this.data.mensaje
  }

}
