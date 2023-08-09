import { Product } from "src/app/model/product";

export interface ProductState{
    isLoading:boolean;
    isSucces:boolean;

    isDelLoading:boolean;
    isDelSucces:boolean;

    isAddLoading:boolean;
    isAddSuccess:boolean;

    isUpdateLoading:boolean;
    isUpdateSuccess:boolean;
    
    productList:Product[];
    error:string;
}