import { createReducer, on } from "@ngrx/store";
import { ProductState } from "../states/product.state";
import * as ProductActions from '../actions/product.actions';

export const initualState : ProductState = {
    isLoading:false,
    isSucces:false,
    isDelLoading:false,
    isDelSucces:false,
    isAddLoading:false,
    isAddSuccess:false,
    isUpdateLoading:false,
    isUpdateSuccess:false,
    productList:[],
    error:'',
};

export const productReducer = createReducer(
    initualState,
    on(ProductActions.getProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: true,
            isSuccess: false,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.getProductSuccess,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: true,
            productList: action.productList,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.getProductFailure,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isLoading: false,
            isSuccess: false,
            error:action.error,
        };
        return newState;
    }),
    on(ProductActions.deleteProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: true,
            isDelSucces: false,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.deleteProductSuccess,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSucces: true,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.deleteProductFailure,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isDelLoading: false,
            isDelSucces: false,
            error:action.error,
        };
        return newState;
    }),
    on(ProductActions.addProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: true,
            isAddSuccess: false,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.addProductSuccess,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: true,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.addProductFailure,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isAddLoading: false,
            isAddSuccess: false,
            error:action.error,
        };
        return newState;
    }),
    on(ProductActions.updateProduct,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpdateLoading: true,
            isUpdateSuccess: false,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.updateProductSuccess,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpdateLoading: false,
            isUpdateSuccess: true,
            error:'',
        };
        return newState;
    }),
    on(ProductActions.updateProductFailure,(state,action)=>{
        console.log(action.type);
        let newState = {
            ...state,
            isUpdateLoading: false,
            isUpdateSuccess: false,
            error:action.error,
        };
        return newState;
    }),
);