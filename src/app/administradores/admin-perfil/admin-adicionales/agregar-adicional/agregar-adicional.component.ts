import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdicionalesDataService } from 'src/app/service/data/adicionales-data.service';
import { Adicionales } from '../adicionales.model';

@Component({
  selector: 'app-agregar-adicional',
  templateUrl: './agregar-adicional.component.html',
  styleUrls: ['./agregar-adicional.component.css']
})
export class AgregarAdicionalComponent implements OnInit {

  miId
  adicional:Adicionales
  constructor(private router: Router,private route: ActivatedRoute, private servicio: AdicionalesDataService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      
    })

    this.adicional ={
      id:null,
      nombre:null,
      precio:null,
      servicio:null,
      servicioIva:null,
    }
  }

  saveAdicional(){
    this.servicio.agregarAEvento(this.adicional, this.miId).subscribe(response=>{response; alert('Se agrego el adicional ' + this.adicional.nombre); this.router.navigate(['administradores/admin/eventos/lista/adicionales/'+this.miId]);},
    error=> {alert(error.message)}
    )
    
  }

}
