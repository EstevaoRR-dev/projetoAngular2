import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { GatosComponent } from './gatos.component';


@NgModule({
  declarations: [
    GatosComponent
  ],
  imports: [
    CommonModule,
    GatosRoutingModule
  ]
})
export class GatosModule { }
