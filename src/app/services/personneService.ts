export class PersoService {
     PizzaPlat = [
          {name: 'Charcuterie',
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
        errormsg=false;
        deletpizza=[];
        somme=0;
       wantpay=false;
       succesmsg=false;
       title = 'SmartPizzeria';
       isAuth=false;
       commandetecket=[];
        a=0;
        getPizzabyName(pizzaname: string){
          var pizzaPrice: number;
          const name= this.PizzaPlat.find(
            (pizza)=>{
              return pizza.name===pizzaname;
            }
          );
          return name;
        }
       onslctCMD(pizza: string , price: number){
         var ifexiste=false;
         var total=0;
         var i;
         for (i in this.commandetecket) {  
           if (this.commandetecket[i][0] == pizza) {
            ifexiste=true;
            this.commandetecket[i][2]+=1;
           }
         }
          if (!ifexiste){
              this.commandetecket.push([pizza,price,1]);
            }
          this.calcsomme();
          this.deletpizza[pizza]=true;
      }//onslctCMD
      calcsomme(){
        this.somme=0;
        for (var i in this.commandetecket){
        this.somme+= this.commandetecket[i][2]* this.commandetecket[i][1];
        }
        if (this.somme>0){
          document.getElementById("btnpay").style.visibility="visible";
        }
        else{
          document.getElementById("btnpay").style.visibility="hidden";
        }
      }
      onClickpay(){
        if (this.somme>0){
          this.wantpay=true;
        }
      }// onClickpay
      onPay(somme,price){
        if (somme==price){
              this.succesmsg=true;
              this.wantpay=false;
              this.errormsg=false;
              document.getElementById("btnpay").style.visibility="hidden";
        }
        else{
          this.errormsg=true;
          this.succesmsg=false;
          document.getElementById("btnpay").style.visibility="visible";
        }
      }
      onadd(pizza){
        for ( var i in this.commandetecket){
            if (this.commandetecket[i][0] == pizza) {
              this.commandetecket[i][2]+=1;
            }
        }
        this.calcsomme();
        this.deletpizza[pizza]=true;
      }
      ondelet(pizza){
        for ( var i in this.commandetecket){
          if (this.commandetecket[i][0] == pizza && this.commandetecket[i][2]>0 ) {
            this.commandetecket[i][2]-=1;
            if (this.commandetecket[i][2]==0) {
              this.deletpizza[pizza]=false;
            }
          }   
      }
      this.calcsomme();
      } 
      onSelectPlat(plt) {
          if (document.getElementById(plt).style.visibility=='visible') {
              document.getElementById(plt).style.visibility='hidden';
          }
          else{
            document.getElementById(plt).style.visibility='visible';
          }
         } // selectPlat
         onAthu(user:string, pass:string){
          if (user=='admin' && pass=='admin'){
              return true;
          }
          else{
               return false;
          }
          return false;
         }
}