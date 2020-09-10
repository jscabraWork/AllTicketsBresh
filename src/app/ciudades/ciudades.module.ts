import { ResumirPipe6 } from './../pipes/resumir.pipe copy 4';
import { ResumirPipe4 } from './../pipes/resumir.pipe copy 3';
import { ResumirPipe3 } from './../pipes/resumir.pipe copy 2';


import { HttpClientModule } from '@angular/common/http';
import { CiudadesEventosComponent } from './ciudades-eventos/ciudades-eventos.component';
import { CommonModule } from '@angular/common';
import { CiudadesComponent } from './ciudades.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes=[

{
    path:'',
    children:[
        {
          path:'',
          component: CiudadesComponent
        },
        {
          path: 'eventos/:id',
          component: CiudadesEventosComponent
        },
   

      ]
}


]

@NgModule({

    declarations:[CiudadesEventosComponent,
    ResumirPipe3,
    ResumirPipe6,
  ResumirPipe4 ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes), 
        HttpClientModule
    ]

})
export class CiudadesModule{}