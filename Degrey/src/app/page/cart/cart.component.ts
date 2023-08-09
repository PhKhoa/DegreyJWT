import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ProductState } from 'src/app/ngrx/states/product.state';
import * as CartActions from '../../ngrx/actions/cart.actions'
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList$ = this.store.select((state) => state.cart.cartList);
  total$=this.store.select((state)=>state.cart.total);
  constructor(private store:Store<{product:ProductState,cart:CartState}>){}

removeProductFromCart(product:Product){
  this.store.dispatch(CartActions.removeProductFromCart({product}))
}

clearAllCart(){
  this.store.dispatch(CartActions.clearAllCart())
}

addProductToStock(product:Product){
  this.store.dispatch(CartActions.addProductToStock({product}))
}

removeProductFromStock(product:Product){
  this.store.dispatch(CartActions.removeProductFromStock({product}))
}

// show(product:Product){
//   // console.log(product.stock)
// }

}
