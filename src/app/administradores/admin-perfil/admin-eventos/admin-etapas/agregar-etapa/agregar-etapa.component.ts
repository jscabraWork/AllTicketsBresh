import { Etapa } from './../../../../../eventos/eventos-perfil/etapa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EtapasDataService } from './../../../../../service/data/etapas-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-etapa',
  templateUrl: './agregar-etapa.component.html',
  styleUrls: ['./agregar-etapa.component.css']
})
export class AgregarEtapaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EtapasDataService,private router: Router) { }
miId
etapa:Etapa
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.miId =params.get('id');
      
    })
    this.etapa={
      evento:null,
      id:null,
      localidades:[],
      nombre:null,
      visible:null    
    }

  }


  saveEtapa(){
    this.service.addEtapa(this.miId, this.etapa).subscribe(response=>{response; alert('Se agrego la etapa ' + this.etapa.nombre); this.router.navigate(['administradores/admin/eventos/lista/etapas/'+this.miId]);},
    error=> {alert(error.message)}
    )
    
  }

}
