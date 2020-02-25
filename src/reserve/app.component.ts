import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price=0;
  errormsg=false;
  iscommande=false;
  tabltotal=[];
  linecmd=0;
  somme=0;
 commande=[];
 tabQt=[];
 selectprice=[];
 wantpay=false;
 succesmsg=false;
 tabletest=[];
 title = 'SmartSnack';
 PizzaPlat = [
  {name: 'Margherita',
  ingredient:"tomate, mozzarella, basilic, huile d'olive",
   price: 30,
   imgurl: "..\\assets\\img\\Margherita.png"
  },
  {name: 'Napolitaine',
  ingredient: " tomate, mozzarella, anchois, olives noires, origan, huile d'olive",
   price: 40,
   imgurl: "..\\assets\\img\\Napolitaine.png"
  },
  {name: 'Sicilienne',
  ingredient: "tomate, mozzarella, basilic, anchois, câpres, champignon",
  price: 45 ,
  imgurl: "..\\assets\\img\\sicilia.png"
},
  {name:'Quatre fromage',
  ingredient: " mozzarella et d'autres fromages, tomate, anchois, olives noires, origan, huile d'olive",
  price: 50,
  imgurl: "..\\assets\\img\\fromagre.png"
},
  {name: 'Marocain',
  ingredient:"fromage adam(fromage rouge), tomate, thone, anchois, olives noires, origan, huile d'olive ",
  price: 55,
  imgurl: "..\\assets\\img\\marocain.png"
}
];
a=0;
constructor() {
  
}// constructor
onSelectPlat(plt) {

   //alert(document.getElementById(plt).style.visibility=='hidden');
  if (document.getElementById(plt).style.visibility=='visible') {
      document.getElementById(plt).style.visibility='hidden';
  }
  else{
    document.getElementById(plt).style.visibility='visible';
  }
 } // selectPlat
 onslctCMD(pizza , price){
   var bool=false;
   var total=0
   for(var elemcmd in this.commande){
     //alert(this.commande[elemcmd])
      //alert(this.commande[elemcmd]);
      if (this.commande[elemcmd]==pizza){
          this.tabQt[pizza]+=1;
          bool=true;
          this.tabletest[pizza]=true;
      }//if

    }//for1
    if (!bool){
        this.commande.push(pizza);
        this.tabletest[pizza]=true;
        this.tabQt[pizza]=1;
        this.selectprice[pizza]=price;
     }//endif
     this.linecmd+=1
     this.iscommande=true;
     //for(var i=0; i<this.linecmd;i++){
      total=this.tabQt[pizza]*this.selectprice[pizza];
       this.tabltotal[pizza]=total;
       
       this.somme=0;
      for (var i in this.tabltotal) {
         this.somme+=Number(this.tabltotal[i]);
       }
}//onslctCMD
onClickpay(){
  if (this.somme>0){
    this.wantpay=true;
  }
}// onClickpay
paye(){
  
}
onPay(){
  if (this.somme==this.price){
        this.succesmsg=true;
        this.wantpay=false;
        this.errormsg=false;
  }
  else{
    this.errormsg=true;
    this.succesmsg=false;
  }
}
onadd(pizza){
  this.tabQt[pizza]+=1;
  this.somme+=Number(this.tabltotal[pizza]);
  this.tabletest[pizza]=true;
}
ondelet(pizza){
  if(this.tabQt[pizza]>1){
        this.tabQt[pizza]-=1;
        this.somme-=Number(this.tabltotal[pizza]);
        this.tabletest[pizza]=true;
  }
  else {
    this.tabQt[pizza]-=1;
    this.somme-=Number(this.tabltotal[pizza]);
    this.tabletest[pizza]=false;

  }
}
} // AppComponent
