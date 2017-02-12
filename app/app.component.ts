import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent { 
  pageTitle: string = 'Nackademiska Auktionsfrämjandet';
}