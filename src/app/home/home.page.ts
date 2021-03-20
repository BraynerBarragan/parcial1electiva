import { Component } from '@angular/core';
import { isNumber } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  n1 = 1;
  n2 = 2;
  n3 = 3;
  n4 = 4;
  n5 = 5;
  n6 = 6;
  n7 = 7;
  n8 = 8;
  n9 = 9;
  n0 = 0;
  suma = '+';
  resta = '-';
  multiplicacion = '*';
  division = '/';

  escribe = '';
  resultado = 0;
  nu1 = 0;
  nu2 = 0;
  operador = '';
  s= 0;
  escribir(c){
    if(isNumber(c) && this.s == 0){
      this.nu1=c;
    }
    if( this.s == 1){
      this.operador = c;
    }
    if(isNumber(c) && this.s == 2){
      this.nu2 = c;
    }

    if (this.escribe==''){
      this.escribe = c;
    }else{
      this.escribe= this.escribe + c;
    }
    this.s = this.s + 1;
  }
  calcular(){
    if(this.operador == '+'){
      
      this.resultado = this.nu1+this.nu2;
    }
    if(this.operador == '-'){
      
      this.resultado = this.nu1-this.nu2;
    }
    if(this.operador == '/'){
      
      this.resultado = this.nu1/this.nu2;
    }
    if(this.operador == '*'){
      
      this.resultado = this.nu1*this.nu2;
    }
    this.s= 0;
    this.escribe = '';
  }


}
