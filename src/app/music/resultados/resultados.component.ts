import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
  saludos: string ='hola mundo';
  goles:number=10;
  
  numero1: string= null;
  numero2: string= null;
  respuesta: string= null; 
  respuesta1: string= null;
  constructor() {
    console.log("hola"); 
   }

  ngOnInit() {}
  login(){
    console.log("estamos en el login");
    if (this.numero1=='paul Roche') {
      this.respuesta=this.numero1
      
      if (this.numero2=='123456') {
        this.respuesta1=this.numero2
        console.log("inicio de sesion correcto");
      }
    }else{

    }
    this.respuesta=this.numero1+this.numero2;
    console.log("la respuesta es: ",this.respuesta);    
  }

}
