import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
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
