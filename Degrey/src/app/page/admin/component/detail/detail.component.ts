import { Component } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Store } from '@ngrx/store';
import { ProductState } from 'src/app/ngrx/states/product.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ProductActions from '../../../../ngrx/actions/product.actions';
import { AuthState } from 'src/app/ngrx/states/auth.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public product: Product,public dialogRef: MatDialogRef<DetailComponent>, private store:Store<{product:ProductState,idToken:AuthState}>) {}
  idToken$: Observable<string> = this.store.select('idToken','idToken');
  productForm!: FormGroup;
   ngOnInit(): void {
      this.productForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        imgUrl: new FormControl('', [Validators.required],
        ),
      });
    }

    
  updateProduct(product:Product){
    // console.log(product._id);
    // console.log(this.product._id);
    
    product._id = this.product._id;
    if(!product.quantity){
      product.quantity = this.product.quantity
    }
    if(!product.imgURL){
      product.imgURL = this.product.imgURL
    }
    if(!product.price){
      product.price = this.product.price
    }
    if(!product.name)
    {
      product.name = this.product.name
    }
    // this.store.dispatch(ProductActions.updateProduct({product,idToken}));
    this.idToken$.subscribe(value =>{
      if(value){
        this.store.dispatch(ProductActions.updateProduct({ product,idToken:value }))
      }
    })
    console.log(product);
  }

  // closeDialog(): void {
  //   this.dialogRef.close();
  // }
}
