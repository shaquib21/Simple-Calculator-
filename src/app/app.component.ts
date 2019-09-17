import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  a;
  b;
  st="";
  oper=0;
  add2(){
    this.oper = this.a + this.b;
    this.st=""+this.a+" + "+this.b+" = "+this.oper;
  }
  sub2(){
    this.oper = this.a - this.b;
    this.st=""+this.a+" - "+this.b+" = "+this.oper;
  }
  mul2(){
    this.oper = this.a * this.b;
    this.st=""+this.a+" * "+this.b+" = "+this.oper;
  }
  div2(){
    this.oper = this.a / this.b;
    this.st=""+this.a+" / "+this.b+" = "+this.oper;
  }
}
