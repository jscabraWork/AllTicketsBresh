import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit ,  Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-imagen-eventos',
  template: 'passed in {{ data.mapaImagen }}',
  templateUrl: './imagen-eventos.component.html',
  styleUrls: ['./imagen-eventos.component.css']
})
export class ImagenEventosComponent implements OnInit {


  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialog:MatDialog) {}

  ngOnInit(): void {
 
  }
  cerrarTodo(){
    this.dialog.closeAll()
  }

}
