import { Cliente } from './../cliente.model';
import { UsuariosDataService } from './../../service/data/usuarios-data.service';
import { HardcodedAutheticationService } from './../../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CambiarPerfilComponent } from './cambiar-perfil/cambiar-perfil.component';
import { BoletasDataService } from 'src/app/service/data/boletas-data.service';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';
import { CambiarDuenoBoletaComponent } from './cambiar-dueno-boleta/cambiar-dueno-boleta.component';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent implements OnInit {

  user ='';
  usuario:Cliente
  tickets=false
  palcos = false
  datos = true
 
  constructor(private route:ActivatedRoute, private autenticador: HardcodedAutheticationService, private dataServicio:UsuariosDataService, private dialog:MatDialog, private boletaService: BoletasDataService, private palcoServicio: PalcosDataService) { }

  ngOnInit(): void {
    this.usuario= {
      nombre: "",
      numeroDocumento: null,
      tipoDocumento: "",
      usuario: "",
      contrasena:"",
      celular:null,
      correo:"",
        
        publicidad:null,
        boletas:[],
        palcos:[],
        tipo:null
    }

    if(this.autenticador.getUsuario()){
    this.user= this.autenticador.getUsuario();
  }
  else if(this.autenticador.getAdmin()){
    this.route.paramMap.subscribe( params =>{
      this.user =params.get('user');
    })
  }

    this.dataServicio.getCliente(this.user).subscribe(response => 
{      console.log(response)
      this.usuario=response}
    )
  }


  openDialog(){
    const dialogRef = this.dialog.open(CambiarPerfilComponent, {
      width: '600px',
      height:'700px',
      
      data: { 
        usuario: this.usuario,
      
      }       
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
      
      this.dialog.closeAll();
      this.ngOnInit()
  
  
  
     
    });
  }

  mandarQR(idBoleta){

    alert("Se ha enviado el QR de la boleta " + idBoleta +" al correo " +this.usuario.correo)
    this.boletaService.mandarQRBoleta(idBoleta).subscribe(response=>{
      response
      
    })
  }

  mandarQRPalco(idPalco, numeroPalco){
    alert("Se ha enviado el QR del " + numeroPalco +" al correo " +this.usuario.correo)
    this.palcoServicio.mandarQRPalco(idPalco).subscribe(response=>{
      response
      
    })
  }


  openDialog2(boleta){
    const dialogRef = this.dialog.open(CambiarDuenoBoletaComponent, {
      width: '600px',
      height:'700px',
      
      data: { 
        boleta: boleta,
      
      }       
      
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
     
      
      this.dialog.closeAll();
      this.ngOnInit()
  
  
  
     
    });
  }
}
