import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {

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
