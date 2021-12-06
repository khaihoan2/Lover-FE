import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoSellerComponent} from './info-seller/info-seller.component';
import {IndexComponent} from './index/index.component';
import {CartComponent} from './cart/cart.component';
import {InfoCartComponent} from './info-cart/info-cart.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'info-seller/:id', component: InfoSellerComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'cart-info/:id', component: InfoCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
