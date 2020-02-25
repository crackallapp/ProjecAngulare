import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';
import { PersoService } from '../services/personneService';
import { RouterModule,Routes, Router } from '@angular/router';

@Component({
  selector: 'ClienVeiw',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {
  datecmd= new Date();
  
  user:string;
  price=0;
  pass:string;
  errormsg=false;
  deletpizza=[];
  somme: number;
 wantpay=false;
 succesmsg=false;
 title = 'SmartPizzeria';
 isAuth=false;
 commandetecket=[];
 PizzaPlat=[];
  a=0;
constructor(private persoService: PersoService, private router: Router) {}// constructor
ngOnInit () {
  this.PizzaPlat=this.persoService.PizzaPlat;
  this.commandetecket=this.persoService.commandetecket;
  this.deletpizza=this.persoService.deletpizza;
  this.somme=this.persoService.somme;
  this.wantpay=this.persoService.wantpay;

}//ngonit
NgModule({
providers: [
 ]
}){}
onSelectPlat(plt) {
  this.persoService.onSelectPlat(plt);
  this.somme=this.persoService.somme;
 } // selectPlat
 onslctCMD(pizza , price){
   this.persoService.onslctCMD(pizza,price);
}//onslctCMD
calcsomme(){
  this.persoService.calcsomme;
}
onClickpay(){
  this.persoService.onClickpay();
  this.wantpay=this.persoService.wantpay;
}// onClickpay
onPay(){
  document.body.style.cursor="wait";
  setTimeout(
    () => {
      this.persoService.onPay(this.somme, this.price);
      this.succesmsg=this.persoService.succesmsg;
      this.errormsg=this.persoService.errormsg;
      this.wantpay=this.persoService.wantpay;
      document.body.style.cursor="default";
    }, 4000
  );
 
}
onadd(pizza){
  if (!this.succesmsg){
    this.persoService.onadd(pizza);
    this.somme=this.persoService.somme;
  }
}
ondelet(pizza){
  if (!this.succesmsg){
    this.persoService.ondelet(pizza);
    this.somme=this.persoService.somme;
  }

}
onAthu(){
  var a:string;
  this.isAuth=  this.persoService.onAthu(this.user,this.pass);
  if (this.isAuth){
    a='admin/'+this.user;
    this.router.navigate([a]);
  }
}
}// AppComponent
