import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(module => module.BuyerModule)
  }, {
  path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(module => module.FeedbackModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
