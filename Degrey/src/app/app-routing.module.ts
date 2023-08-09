import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home', 
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren:() => import('./page/home/home.module').then(n => n.HomeModule),     
    pathMatch: 'full'
  },
  {
    path:'cart',
    loadChildren:() => import('./page/cart/cart.module').then(n => n.CartModule),     
    pathMatch: 'full'
  },
  {
    path:'admin',
    loadChildren:() => import('./page/admin/admin.module').then(n => n.AdminModule),     
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
