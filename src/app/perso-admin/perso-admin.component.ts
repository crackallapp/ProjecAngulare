import { Component, OnInit } from '@angular/core';
import { ClientViewComponent } from '../client-view/client-view.component'
import { RouterModule,ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perso-admin',
  templateUrl: './perso-admin.component.html',
  styleUrls: ['./perso-admin.component.css']
})
export class PersoAdminComponent implements OnInit {
  user:string
  title="Gestion des commandes:"
  isAuth: boolean;
  constructor(private client: ClientViewComponent,private router:Router, private route: ActivatedRoute) { 
    
  }
  ngOnInit() {
  this.user=  this.route.snapshot.params['user'];
    this.isAuth=this.client.isAuth;
  }
  onDeconnect(){
    this.router.navigate(['clients']);
    this.isAuth=false;
    this.client.isAuth=false;
  }
  
}
