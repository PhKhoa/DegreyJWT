import { Product } from "src/app/model/product";

export interface CartState{
    cartList:Product[];
    productList:Product[];
    total:number;
}