import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PersoService } from './services/personneService';
import { PersoAdminComponent } from './perso-admin/perso-admin.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: 'clients', component:ClientViewComponent},
  {path: 'admin/:user', component:PersoAdminComponent},
  {path: '', component:ClientViewComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    PersoAdminComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ],
  providers: [
    PersoService,
    ClientViewComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
