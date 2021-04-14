import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  constructor() { }
  lista1:number[]=[] 
  lista2:number[]=[] 
  lista3:number[]=[] 
  lista4:number[]=[]
  lista5:number[]=[] 
  lista6:number[]=[] 
  lista7:number[]=[] 
  lista8:number[]=[]  

  lista9:number[]=[] 
  lista10:number[]=[]  

  lista11:number[]=[] 
  lista12:number[]=[] 

  lista13:number[]=[] 
  lista14:number[]=[] 

  lista15:number[]=[] 
  lista16:number[]=[] 
  lista17:number []=[]
  lista18:number []=[]
  lista19:number []=[]
  ngOnInit(): void {
    for(let i = 1; i< 13; i+=1){
      this.lista1[i-1]=i;
      this.lista2[i-1]=i+12
     
    }
    for(let i =1; i< 15; i+=1){
      this.lista3[i-1]=i+24
      this.lista4[i-1]=i+38
      this.lista5[i-1]=i+52
      this.lista6[i-1]=i+66
    }
    for(let i =1; i< 8; i+=1){
      this.lista7[i-1]=i+80
      this.lista8[i-1]=i+87
    
    }
    for(let i =1; i< 7; i+=1){
      this.lista9[i-1]=i+94
      this.lista10[i-1]=i+100
      this.lista11[i-1]=i+106
      this.lista12[i-1]=i+112
    
    }

    for(let i =1; i< 10; i+=1){
      this.lista13[i-1]=i+118
      this.lista14[i-1]=i+127
      this.lista15[i-1]=i+136
      this.lista16[i-1]=i+145

    }

    for(let i =1; i< 17; i+=1){
      this.lista17[i-1]=i+154


    }
    for(let i =1; i< 15; i+=1){
      this.lista18[i-1]=i+170
    }

    for(let i =1; i< 3; i+=1){
      this.lista19[i-1]=i+184
    }
    
  }

}
