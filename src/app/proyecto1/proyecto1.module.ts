import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto1RoutingModule } from './proyecto1-routing.module';
import { Proyecto1Component } from './components/proyecto1/proyecto1.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    Proyecto1Component
  ],
  imports: [
    CommonModule,
    Proyecto1RoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class Proyecto1Module { }
