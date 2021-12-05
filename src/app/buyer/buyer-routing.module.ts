import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoSellerComponent} from './info-seller/info-seller.component';
import {IndexComponent} from './index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'info-seller/:id', component: InfoSellerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
