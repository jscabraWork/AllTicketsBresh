import { ActivatedRoute, Router } from '@angular/router';
import { CiudadesDataService } from './../../../service/data/ciudades-data.service';
import { Ciudad } from './../../../ciudades/ciudad.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades-update',
  templateUrl: './ciudades-update.component.html',
  styleUrls: ['./ciudades-update.component.css']
})
export class CiudadesUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,private servicio: CiudadesDataService, private router:Router) { }
  ciudad:Ciudad;
  id;
  selectedFile:File=null;
  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      this.id =params.get('id');
  })
  this.ciudad ={    id: 0,
    nombre:'string',
    imagen:null,
    temperatura:0,
    visible:true
  }
    
    
    
    
  this.servicio.getCiudad(this.id).subscribe(response=> this.manejarCiudad(response));
  }

  manejarCiudad(response){
    this.ciudad=response;
  }

  saveCiudad(){
    this.servicio.updateCiudad(this.id,this.ciudad).subscribe(data=>data);
    this.router.navigate(['/administradores/admin/ciudades/lista'])
    alert('Se ha modificado la ciudad de ' +this.ciudad.nombre)
  }
}
