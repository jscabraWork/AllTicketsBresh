import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImagenDataService } from 'src/app/service/data/imagen-data.service';

@Component({
  selector: 'app-agregar-fotos-banner',
  templateUrl: './agregar-fotos-banner.component.html',
  styleUrls: ['./agregar-fotos-banner.component.css']
})
export class AgregarFotosBannerComponent implements OnInit {

  selectedFiles:FileList;

  progressInfo=[];

  message='';

  filename='';

  fileInfo:Observable<any>;

  idEvento:string


  url:[]=[]
  constructor(private servicio:ImagenDataService, @Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.idEvento = this.data.id

    this.url = this.data.url
  
  }

  selectFiles(event)
  {
    
    this.progressInfo=[];
    event.target.files.length == 1 ? this.filename = event.target.files[0].name: this.filename = event.target.files.length +" archivos";
    this.selectedFiles = event.target.files; 
  }

  uploadFiles(){
    this.message=''
    for(var i =0; i < this.selectedFiles.length; i++){
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(index, file){
    this.progressInfo[index] = {values: 0, fileName: file.name}
    this.servicio.uploadFotoEventoBanner(file, this.idEvento).subscribe(event =>{
      if(event.type===HttpEventType.UploadProgress){
        this.progressInfo[index].value = Math.round(100 * event.loaded/event.total);

      }
      else if(event instanceof HttpResponse){
        this.fileInfo = this.servicio.getFiles();
        this.message="Archivo subido con exito"
      }
    },
    error=>{
      this.progressInfo[index].value=0
      this.message ="No se puede subir el archivo "+file.name
    })
  }

  deleteFile(filename:string){
    this.servicio.deleteFile(filename).subscribe(res=>{
      this.message = res['message']
      this.fileInfo = this.servicio.getFiles();
    })
  }
}
