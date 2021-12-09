import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoSellerComponent} from './info-seller/info-seller.component';
import {IndexComponent} from './index/index.component';
import {CartComponent} from './cart/cart.component';
import {InfoCartComponent} from './info-cart/info-cart.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import {TopModelComponent} from './top-model/top-model.component';
import {Error404Component} from './error404/error404.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'info-seller/:id', component: InfoSellerComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'cart-info/:id', component: InfoCartComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'top-lover', component: TopModelComponent},
  {path: 'profile', component: ProfileUserComponent},
  {path: '404', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
