import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { CartState } from 'src/app/ngrx/states/cart.state';
import { ProductState } from 'src/app/ngrx/states/product.state';
import * as ProductActions from '../../ngrx/actions/product.actions';
import { UserService } from '../home/component/home/component/services/user.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './component/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthState } from 'src/app/ngrx/states/auth.state';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productList$: Observable<Product[]> = this.store.select('product','productList');
  isDelSuccess$ = this.store.select('product','isDelSucces');
  isAddSuccess$ = this.store.select('product','isAddSuccess');
  isUpdateSuccess$ = this.store.select('product','isUpdateSuccess');
  idToken$: Observable<string> = this.store.select('idToken','idToken');
  
  constructor(private store:Store<{product:ProductState,cart:CartState,idToken:AuthState}>, private userService:UserService,public dialog: MatDialog) {
    
    this.idToken$.subscribe(value =>{
      console.log(value);
      if(value){
        console.log('làm đúng r'+value);
        this.store.dispatch(ProductActions.getProduct({idToken:value}));
      }
    });

    this.productList$.subscribe((product)=>{
      console.log(product)
    });

    this.isDelSuccess$.subscribe((value)=>{
      console.log(value)
      if(value){
        this.idToken$.subscribe(value =>{
          console.log(value);
          if(value){
            console.log('làm đúng r'+value);
            this.store.dispatch(ProductActions.getProduct({idToken:value}));
          }
        })
      }
    });

    this.isAddSuccess$.subscribe((value)=>{
      console.log(value)
      if(value){
        this.idToken$.subscribe(value =>{
          console.log(value);
          if(value){
            console.log('làm đúng r'+value);
            this.store.dispatch(ProductActions.getProduct({idToken:value}));
          }
        })
      }
    });

    this.isUpdateSuccess$.subscribe((value)=>{
      console.log(value)
      if(value){
        this.idToken$.subscribe(value =>{
          console.log(value);
          if(value){
            console.log('làm đúng r'+value);
            this.store.dispatch(ProductActions.getProduct({idToken:value}));
          }
        })
      }
    });
   }

  productForm!: FormGroup;
   ngOnInit(): void {
      this.productForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        imgURL: new FormControl('', [Validators.required],
        ),
      });
    }

   deleteProduct(id: string){
    this.idToken$.subscribe(value =>{
      if(value){
        this.store.dispatch(ProductActions.deleteProduct({ id,idToken:value }))
      }
    })
  }

  addProduct(product:Product){
    if(!(product.name)||!(product.price)||!(product.quantity)||!(product.imgURL)){
      alert('Vui lòng nhập đầy đủ thông tin');
    }
    this.idToken$.subscribe(value =>{
      if(value){
        this.store.dispatch(ProductActions.addProduct({ product,idToken:value }))
      }
    })
  }


  openDialog(product: Product): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog was closed with result:', result);
    });
  }

  

}


