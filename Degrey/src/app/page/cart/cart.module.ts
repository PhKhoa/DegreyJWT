import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    CartComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatIconModule
  ]
})
export class CartModule { }
