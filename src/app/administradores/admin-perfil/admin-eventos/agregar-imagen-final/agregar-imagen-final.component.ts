import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImagenDataService } from 'src/app/service/data/imagen-data.service';

@Component({
  selector: 'app-agregar-imagen-final',
  templateUrl: './agregar-imagen-final.component.html',
  styleUrls: ['./agregar-imagen-final.component.css']
})
export class AgregarImagenFinalComponent implements OnInit {

  idEvento

  selectedFiles: FileList;

  progressInfo = [];

  message = '';

  filename = '';

  fileInfo: Observable<any>;

  url

  imageSrc
  constructor(private servicio: ImagenDataService, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.idEvento = this.data.id
    this.url = this.data.url
  }

  selectFiles(event) {

    this.progressInfo = [];
    event.target.files.length == 1 ? this.filename = event.target.files[0].name : this.filename = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;

    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(this.selectedFiles[0]);
  }

  uploadFiles() {
    this.message = ''
    for (var i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);

    }
  }

  upload(index, file) {
    this.progressInfo[index] = { values: 0, fileName: file.name }
    this.servicio.uploadFotoFinal(file, this.idEvento).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        this.message="Foto de perfil cambiada"
      }
      else if (event instanceof HttpResponse) {
        this.fileInfo = this.servicio.getFiles();
      }
    },
      error => {
        this.progressInfo[index].value = 0
        this.message = "Foto  " + file.name + " ya estaba en nuestra base de datos y se puso de perfil"
      })
  }
}