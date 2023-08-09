import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './component/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    DetailComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class AdminModule { }
