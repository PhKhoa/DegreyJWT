import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/model/product";

export const getProduct = createAction('[Product] Get Products',props<{idToken:string}>());
export const getProductSuccess = createAction('[Product] Get Products Success',props<{productList:Product[]}>());
export const getProductFailure = createAction('[Product] Get Products Failure',props<{error:any}>());
export const deleteProduct = createAction('[product] delete product',props<{id:string,idToken:string}>())
export const deleteProductSuccess = createAction(
    '[product] delete product success',
    );
export const deleteProductFailure = createAction(
    '[product] delete product failure',
    props<{error: any}>()
);
export const addProduct = createAction('[product] add product',props<{product:Product,idToken:string}>());
export const addProductSuccess = createAction('[product] add product success');
export const addProductFailure = createAction('[product] add product failure',props<{error:any}>());

export const updateProduct = createAction('[product] update product',props<{product:Product,idToken:string}>());
export const updateProductSuccess = createAction('[product] update product success');
export const updateProductFailure = createAction('[product] update product failure',props<{error:any}>());

