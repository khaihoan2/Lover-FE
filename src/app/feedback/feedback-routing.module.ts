import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackListComponent} from './feedback-list/feedback-list.component';
import {FeedbackCreateComponent} from './feedback-create/feedback-create.component';
import {FeedbackUpdateComponent} from './feedback-update/feedback-update.component';
import {FeedbackDeleteComponent} from './feedback-delete/feedback-delete.component';


const routes: Routes = [{
  path: '',
  component: FeedbackListComponent
}, {
  path: 'create',
  component: FeedbackCreateComponent
}, {
  path: 'edit/:id',
  component: FeedbackUpdateComponent
}, {
  path: 'delete/:id',
  component: FeedbackDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
