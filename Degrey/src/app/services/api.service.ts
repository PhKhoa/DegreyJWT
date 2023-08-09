import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  getProducts(idToken:string){
    return this.http.get<Product[]>("http://localhost:3000/product/getAll",{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      }),
    });
  }

  deleteProduct(id:string,idToken:string){
    return this.http.delete<Product>(`http://localhost:3000/product/delete/${id}`,{
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      }),
    })
  }

  addProduct(product:Product,idToken:string){
    return this.http.post<Product>("http://localhost:3000/product/create",product,{
      // name: product.name,
      // price: product.price,
      // quantity: product.quantity,
      // imgURL: product.imgURL,
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      }),
    });
  }

  updateProduct(product:Product,idToken:string){
    return this.http.put<Product>(`http://localhost:3000/product/update/${product._id}`,product,{
      // name: product.name,
      // price: product.price,
      // quantity: product.quantity,
      // imgURL: product.imgURL,
      headers: new HttpHeaders({
        Authorization:`${idToken}`
      }),
    });
  }
}
