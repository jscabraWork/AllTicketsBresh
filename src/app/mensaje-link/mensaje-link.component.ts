import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje-link',
  templateUrl: './mensaje-link.component.html',
  styleUrls: ['./mensaje-link.component.css']
})
export class MensajeLinkComponent implements OnInit {

  mensaje
  id
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog ) { }

  ngOnInit(): void {
    this.mensaje = this.data.mensaje
    this.id = this.data.id
  }
}
