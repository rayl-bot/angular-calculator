import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //default
  title = 'Ejemplo';
  //atributos creados calculator
  num1 = '';
  number1 = 0.0;
  num2= '';
  number2 = 0.0;
  result=0.0;
  operation='';
  isOper = false;
  point = false;

  setOperatorSuma(){
    this.isOper = true;
    this.operation = '+';
    this.point = false;
  }

  setOperatorResta(){
    this.isOper = true;
    this.operation = '-';
    this.point = false;
  }

  setOperatorMulti(){
    this.isOper = true;
    this.operation = 'x';
    this.point = false;
  }

  setOperatorDivi(){
    this.isOper = true;
    this.operation = '/';
    this.point = false;
  }

  resolv(){
    if(this.operation == '+'){
      this.number1 = parseFloat(this.num1);
      this.number2 = parseFloat(this.num2);
      this.result = this.number1+this.number2;
    }else if(this.operation == '-'){
      this.number1 = parseFloat(this.num1);
      this.number2 = parseFloat(this.num2);
      this.result = this.number1-this.number2;
    }else if(this.operation == 'x'){
      this.number1 = parseFloat(this.num1);
      this.number2 = parseFloat(this.num2);
      this.result = this.number1*this.number2;
    }else if(this.operation == '/'){
      this.number1 = parseFloat(this.num1);
      this.number2 = parseFloat(this.num2);
      if(this.number2 == 0){
        this.result = 0;
      }else{
        this.result = this.number1/this.number2;
      }
    }
  }

  addPoint(){
    if(!this.point){
      if(this.isOper){
        this.num2+='.';
        this.point =true;
      }else{
        this.num1+='.';
        this.point =true;
      }
    }
  }

  clear(){
    this.num1 = '';
    this.number1 = 0.0;
    this.num2= '';
    this.number2 = 0.0;
    this.result=0.0;
    this.operation='';
    this.isOper = false;
    this.point = false;
  }

  add0(){
    if(this.isOper){
      this.num2+=0;
    }else{
      this.num1+=0;
    }
  }

  add1(){
    if(this.isOper){
      this.num2+=1;
    }else{
      this.num1+=1;
    }
  }

  add2(){
    if(this.isOper){
      this.num2+=2;
    }else{
      this.num1+=2;
    }
  }
  add3(){
    if(this.isOper){
      this.num2+=3;
    }else{
      this.num1+=3;
    }
  }
  add4(){
    if(this.isOper){
      this.num2+=4;
    }else{
      this.num1+=4;
    }
  }

  add5(){
    if(this.isOper){
      this.num2+=5;
    }else{
      this.num1+=5;
    }
  }

  add6(){
    if(this.isOper){
      this.num2+=6;
    }else{
      this.num1+=6;
    }
  }

  add7(){
    if(this.isOper){
      this.num2+=7;
    }else{
      this.num1+=7;
    }
  }

  add8(){
    if(this.isOper){
      this.num2+=8;
    }else{
      this.num1+=8;
    }
  }

  add9(){
    if(this.isOper){
      this.num2+=9;
    }else{
      this.num1+=9;
    }
  }
}
