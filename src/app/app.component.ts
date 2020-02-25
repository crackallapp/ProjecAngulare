import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';
import { PersoService } from './services/personneService';
import { RouterModule,Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: string;
constructor() {}// constructor
}