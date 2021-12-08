import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './shared/header/header.component';
import { DescriptionComponent } from './shared/description/description.component';
import { OutModelComponent } from './shared/out-model/out-model.component';
import { GalleryModelComponent } from './gallery-model/gallery-model.component';
import { QuoteComponent } from './shared/quote/quote.component';
import { NewFaceComponent } from './new-face/new-face.component';
import { TeamComponent } from './shared/team/team.component';
import { ContactComponent } from './shared/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
// @ts-ignore
import {TopModelComponent} from './top-model/top-model.component';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, DescriptionComponent, OutModelComponent, GalleryModelComponent, QuoteComponent, NewFaceComponent, TeamComponent, ContactComponent, FooterComponent, TopModelComponent],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    BuyerRoutingModule
  ]
})
export class BuyerModule { }
