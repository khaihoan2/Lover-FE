import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import {FeedbackListComponent} from './feedback-list/feedback-list.component';
import {FeedbackCreateComponent} from './feedback-create/feedback-create.component';
import {FeedbackDeleteComponent} from './feedback-delete/feedback-delete.component';
import {FeedbackUpdateComponent} from './feedback-update/feedback-update.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackListComponent,
    FeedbackCreateComponent,
    FeedbackDeleteComponent,
    FeedbackUpdateComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeedbackModule { }
