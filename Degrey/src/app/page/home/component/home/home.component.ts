import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductState } from 'src/app/ngrx/states/product.state';
import { ApiService } from 'src/app/services/api.service';
import * as ProductActions from '../../../../ngrx/actions/product.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
}
