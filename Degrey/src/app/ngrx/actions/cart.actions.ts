import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product";

export const addProductToCart  = createAction(
    '[cart] add product to cart',
    props<{product: Product}>() 
);
export const removeProductFromCart = createAction(
    '[cart] remove product from cart',
    props<{product: Product}>()
);
export const addProductToStock = createAction(
    '[cart] add product to stock',
    props<{product: Product}>()
);
export const removeProductFromStock = createAction(
    '[cart] remove product from stock',
    props<{product: Product}>()
);
export const clearAllCart = createAction(
    '[cart] clear all cart'
);