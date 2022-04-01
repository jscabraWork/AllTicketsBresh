import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientPrintJob, DefaultPrinter, FileSourceType, InstalledPrinter, JSPrintManager, PrintFilePDF, WSStatus } from 'jsprintmanager';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { PdfService } from 'src/app/service/data/pdf.service';
import { Cliente } from 'src/app/usuario/cliente.model';

@Component({
  selector: 'app-imprimir-boletas',
  templateUrl: './imprimir-boletas.component.html',
  styleUrls: ['./imprimir-boletas.component.css']
})
export class ImprimirBoletasComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private dialog: MatDialog,
    private servicioPDF: PdfService
  ) { }

    printers: string[];
    selectedPrinter: any;
    isDefaultPrinterSelected = false;
    evento:Evento
    imagenes:string[]=[]
    boletas:Boleta[] =[]
    palco:Palco
    cliente:Cliente
  ngOnInit(): void {
    this.evento= this.data.response.evento
    this.imagenes= this.data.response.imagenes
    this.boletas= this.data.response.boletas
    this.cliente= this.data.response.cliente


        // WebSocket settings
        JSPrintManager.auto_reconnect = true;
        JSPrintManager.start();
        JSPrintManager.WS.onStatusChanged = () => {
            if (this.jspmWSStatus()) {
                // get client installed printers
                JSPrintManager.getPrinters().then((myPrinters: string[]) => {
                  this.printers = myPrinters;
                  console.log(this.printers);
                });
            }
        };

  }


  cerrar() {
    this.dialog.closeAll();
  }






  // Check JSPM WebSocket status
  jspmWSStatus() {
    if (JSPrintManager.websocket_status === WSStatus.Open) {
        return true;
    } else if (JSPrintManager.websocket_status === WSStatus.Closed) {
        alert('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
        return false;
    } else if (JSPrintManager.websocket_status === WSStatus.Blocked) {
        alert('JSPM has blocked this website!');
        return false;
    }
  }
  
  
  
  // Do PDF printing...
  doPrintPDF() {

    let contador =0;
    console.log(this.selectedPrinter);
   
    if (this.selectedPrinter !== 'undefined' && this.jspmWSStatus()) {
        // Create a ClientPrintJob
        const cpj = new ClientPrintJob();
        // Set Printer type (Refer to the help, there many of them!)
		if ( this.isDefaultPrinterSelected ) {
          cpj.clientPrinter = new DefaultPrinter();
        } else {
          cpj.clientPrinter = new InstalledPrinter(this.selectedPrinter);
        }

        // Set content to print...
        //Set PDF file... for more advanced PDF settings please refer to 
		//https://www.neodynamic.com/Products/Help/JSPrintManager4.0/apiref/classes/jspm.printfilepdf.html
    for(let i = 0; i < this.boletas.length; i++){
      this.servicioPDF.getPdfBoleta(this.boletas[i].id,this.imagenes[i]).subscribe(response=>{
        contador++;
        var my_file = new PrintFilePDF(this.darSrc(response), FileSourceType.URL, 'MyFile'+this.boletas[i].id.toString()+contador+'.pdf', 1);
		
        cpj.files.push(my_file);
        
        console.log(i)
          console.log(cpj.files)
         
        // Send print job to printer!
        if(i==this.boletas.length-1){
          cpj.sendToClient();
        }
      },
      error=>{
        console.log(error);
      })

    }
        
    }
  
  }


  darSrc(response) {
    console.log(response.src)
    return response.src;
    //return "https://codigos-qrs.s3.amazonaws.com/1648001627864_973981020823136ticket.pdf"
  }




}