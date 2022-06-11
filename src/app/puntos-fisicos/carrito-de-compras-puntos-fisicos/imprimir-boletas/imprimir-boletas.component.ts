import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientPrintJob, DefaultPrinter, FileSourceType, InstalledPrinter, JSPrintManager, PrintFilePDF, WSStatus } from 'jsprintmanager';
import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
import { API_URL } from 'src/app/app.constants';
import { Boleta } from 'src/app/eventos/boleta.model';
import { Evento } from 'src/app/eventos/evento.model';
import { PdfService } from 'src/app/service/data/pdf.service';
import { Cliente } from 'src/app/usuario/cliente.model';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { $ } from 'protractor';
import { getTokenSourceMapRange } from 'typescript';

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
    imagen: string
  ngOnInit(): void {

    this.evento= this.data.response.evento
    this.imagenes= this.data.response.imagenes
    this.boletas= this.data.response.boletas
    this.cliente= this.data.response.cliente

    if(this.data.response.palco){
      this.palco =this.data.response.palco;
    }
    if(this.data.response.imagen){
      this.imagen =this.data.response.imagen;
    }
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
    

    if(this.boletas){
    for(let i = 0; i < this.boletas.length; i++){
      let data = document.getElementById("ticket"+i.toString());
      
      html2canvas(data as any , {logging: false, useCORS: true, allowTaint: false, proxy: 'https://allticketscol.com/*'}).then(canvas => {
    
  
        var imgWidth = 13.97;
        var pageHeight = 5.08;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        
        const contentDataURL = canvas.toDataURL('image/webp');
        
        let pdfData = new jsPDF('l', 'cm', [13.97,5.08]);
        
        
        var position = 0;
        pdfData.addImage(contentDataURL, 'WEBP', 0, position, imgWidth, imgHeight,'ticket'+this.boletas[i].id, 'NONE')
        
   

        var blob = new Blob([pdfData.output('blob')], { type : 'application/pdf'}); //this make the magic
        
        var blobURL = window.URL.createObjectURL(blob);

        

         var my_file = new PrintFilePDF(blobURL, FileSourceType.URL, 'TICKET'+this.boletas[i].id.toString()+i+'.pdf', 1);


        
        cpj.files.push(my_file);   
        pdfData.save();
        // Send print job to printer!
        if(i == this.boletas.length-1){
          cpj.sendToClient();
        }
          

  
      });
 
    }
  }
    if(this.palco){
      let data = document.getElementById("palco");
      
      html2canvas(data as any , {logging: false, useCORS: true, allowTaint: false, proxy: 'https://allticketscol.com/*'}).then(canvas => {
    
        
        
          var imgWidth = 13.97;
          var pageHeight = 5.08;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          
          const contentDataURL = canvas.toDataURL('image/webp');
          
          let pdfData = new jsPDF('l', 'cm', [13.97,5.08]);
          
          //let pdfData = new jsPDF('p', 'mm', 'a4');
          var position = 0;
          pdfData.addImage(contentDataURL, 'WEBP', 0, position, imgWidth, imgHeight,'ticket'+this.palco.id, 'NONE')
          

          var blob = new Blob([pdfData.output('blob')], { type : 'application/pdf'}); //this make the magic
          
          var blobURL = window.URL.createObjectURL(blob);
        
        for(let i=0;i<this.palco.personasMaximas;i++){
          var my_file = new PrintFilePDF(blobURL, FileSourceType.URL, 'PALCO'+this.palco.id.toString()+i+'.pdf', 1);
          cpj.files.push(my_file);   
        }
        pdfData.save();

        console.log(cpj.files)
        // Send print job to printer!
     
          cpj.sendToClient();
        


      });
    }        
    }
  
  }


  darSrc(response) {
    
    return response.src;
    //return "https://codigos-qrs.s3.amazonaws.com/1648001627864_973981020823136ticket.pdf"
  }




}


// import { Component, Inject, OnInit } from '@angular/core';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ClientPrintJob, DefaultPrinter, FileSourceType, InstalledPrinter, JSPrintManager, PrintFilePDF, WSStatus } from 'jsprintmanager';
// import { Palco } from 'src/app/administradores/admin-perfil/admin-eventos/admin-palcos/palco.model';
// import { API_URL } from 'src/app/app.constants';
// import { Boleta } from 'src/app/eventos/boleta.model';
// import { Evento } from 'src/app/eventos/evento.model';
// import { PdfService } from 'src/app/service/data/pdf.service';
// import { Cliente } from 'src/app/usuario/cliente.model';
// import { jsPDF } from 'jspdf'
// import html2canvas from 'html2canvas';
// import { $ } from 'protractor';
// import { getTokenSourceMapRange } from 'typescript';

// @Component({
//   selector: 'app-imprimir-boletas',
//   templateUrl: './imprimir-boletas.component.html',
//   styleUrls: ['./imprimir-boletas.component.css']
// })
// export class ImprimirBoletasComponent implements OnInit {

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,

//     private dialog: MatDialog,
//     private servicioPDF: PdfService
//   ) { }

//     printers: string[];
//     selectedPrinter: any;
//     isDefaultPrinterSelected = false;
//     evento:Evento
//     imagenes:string[]=[]
//     boletas:Boleta[] =[]
//     palco:Palco
//     cliente:Cliente
//     imagen: string
//   ngOnInit(): void {

//     this.evento= this.data.response.evento
//     this.imagenes= this.data.response.imagenes
//     this.boletas= this.data.response.boletas
//     this.cliente= this.data.response.cliente

//     if(this.data.response.palco){
//       this.palco =this.data.response.palco;
//     }
//     if(this.data.response.imagen){
//       this.imagen =this.data.response.imagen;
//     }
//         // WebSocket settings
//         JSPrintManager.auto_reconnect = true;
//         JSPrintManager.start();
//         JSPrintManager.WS.onStatusChanged = () => {
//             if (this.jspmWSStatus()) {
//                 // get client installed printers
//                 JSPrintManager.getPrinters().then((myPrinters: string[]) => {
//                   this.printers = myPrinters;
//                   console.log(this.printers);
//                 });
//             }
//         };

//   }


//   cerrar() {
//     this.dialog.closeAll();
//   }






//   // Check JSPM WebSocket status
//   jspmWSStatus() {
//     if (JSPrintManager.websocket_status === WSStatus.Open) {
//         return true;
//     } else if (JSPrintManager.websocket_status === WSStatus.Closed) {
//         alert('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
//         return false;
//     } else if (JSPrintManager.websocket_status === WSStatus.Blocked) {
//         alert('JSPM has blocked this website!');
//         return false;
//     }
//   }
  
  
  
//   // Do PDF printing...
//   doPrintPDF() {

 
//     console.log(this.selectedPrinter);
   
//     if (this.selectedPrinter !== 'undefined' && this.jspmWSStatus()) {
//         // Create a ClientPrintJob
//         const cpj = new ClientPrintJob();
//         // Set Printer type (Refer to the help, there many of them!)
// 		if ( this.isDefaultPrinterSelected ) {
//           cpj.clientPrinter = new DefaultPrinter();
//         } else {
//           cpj.clientPrinter = new InstalledPrinter(this.selectedPrinter);
//         }

//         // Set content to print...
//         //Set PDF file... for more advanced PDF settings please refer to 
// 		//https://www.neodynamic.com/Products/Help/JSPrintManager4.0/apiref/classes/jspm.printfilepdf.html
    

//     if(this.boletas){
//     for(let i = 0; i < this.boletas.length; i++){
//       let data = document.getElementById("ticket"+i.toString());
      
//       html2canvas(data as any , {logging: false, useCORS: true, allowTaint: false, proxy: 'https://allticketscol.com/*'}).then(canvas => {
    
  
//           var imgWidth = 13.97;
//           var pageHeight = 5.08;
//           var imgHeight = canvas.height * imgWidth / canvas.width;
//           var heightLeft = imgHeight;
          
//           const contentDataURL = canvas.toDataURL('image/webp');
          
//           let pdfData = new jsPDF('l', 'cm', [13.97,5.08]);
          
          
//           var position = 0;
//           pdfData.addImage(contentDataURL, 'WEBP', 0, position, imgWidth, imgHeight,'ticket'+this.boletas[i].id, 'NONE')
          
          


          


//           var blob = new Blob([pdfData.output('blob')], { type : 'application/pdf'}); //this make the magic
          
//           var blobURL = window.URL.createObjectURL(blob);
 
//           pdfData.save();

//            //  var my_file = new PrintFilePDF(blobURL, FileSourceType.URL, 'TICKET'+this.boletas[i].id.toString()+i+'.pdf', 1);


		
//         //cpj.files.push(my_file);   
//         console.log(i)
//         console.log(cpj.files)
//         // Send print job to printer!
//         if(i == this.boletas.length-1){
//        //   cpj.sendToClient();
//         }
          

  
//       });
 
//     }
//   }
//     if(this.palco){
//       let data = document.getElementById("palco");
      
//       html2canvas(data as any , {logging: false, useCORS: true, allowTaint: false, proxy: 'https://allticketscol.com/*'}).then(canvas => {
    
        
        
//           var imgWidth = 13.97;
//           var pageHeight = 5.08;
//           var imgHeight = canvas.height * imgWidth / canvas.width;
//           var heightLeft = imgHeight;
          
//           const contentDataURL = canvas.toDataURL('image/webp');
          
//           let pdfData = new jsPDF('l', 'cm', [13.97,5.08]);
          
//           //let pdfData = new jsPDF('p', 'mm', 'a4');
//           var position = 0;
//           pdfData.addImage(contentDataURL, 'WEBP', 0, position, imgWidth, imgHeight,'ticket'+this.palco.id, 'NONE')
          

//           var blob = new Blob([pdfData.output('blob')], { type : 'application/pdf'}); //this make the magic
          
//           var blobURL = window.URL.createObjectURL(blob);
        
//         for(let i=0;i<this.palco.personasMaximas;i++){
//           var my_file = new PrintFilePDF(blobURL, FileSourceType.URL, 'PALCO'+this.palco.id.toString()+i+'.pdf', 1);
//           pdfData.save()
//           //cpj.files.push(my_file);   
//         }
      

//       //  console.log(cpj.files)
//         // Send print job to printer!
     
//          // cpj.sendToClient();
        


//       });
//     }        
//     }
  
//   }


//   darSrc(response) {
    
//     return response.src;
//     //return "https://codigos-qrs.s3.amazonaws.com/1648001627864_973981020823136ticket.pdf"
//   }




// }