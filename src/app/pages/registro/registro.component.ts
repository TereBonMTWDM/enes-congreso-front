import { Component, OnInit } from '@angular/core';
//import * as path from 'path';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  downloadMyFile(tipo: string) {
    let link = document.createElement("a");
    if(tipo == 'plantilla'){
      link.download = "plantilla-envio-manuscrito";
      link.href = "assets/files/plantilla-envio.docx";
    }
    else if(tipo == 'listaChequeo'){
      link.download = "lista-chequeo-manuscrito";
      link.href = "assets/files/lista-chequeo.docx";
    }

    link.click();

  }
}
