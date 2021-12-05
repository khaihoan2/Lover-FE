import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { GalleryModelComponent } from './gallery-model/gallery-model.component';
import { NewFaceComponent } from './new-face/new-face.component';
import { InfoSellerComponent } from './info-seller/info-seller.component';
import {HeaderComponent} from './header/header.component';
import {PageSliderComponent} from './page-slider/page-slider.component';
import {ContactComponent} from './contact/contact.component';
import {DescriptionComponent} from './description/description.component';
import {OutModelComponent} from './out-model/out-model.component';
import {QuoteComponent} from './quote/quote.component';
import {TeamComponent} from './team/team.component';
import {FooterComponent} from './footer/footer.component';
import { TopModelComponent } from './top-model/top-model.component';
import { IndexComponent } from './index/index.component';
import { RentComponent } from './rent/rent.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DescriptionComponent, OutModelComponent, GalleryModelComponent, QuoteComponent, NewFaceComponent, TeamComponent, ContactComponent, FooterComponent, InfoSellerComponent, PageSliderComponent, HeaderComponent, PageSliderComponent, ContactComponent, DescriptionComponent, OutModelComponent, QuoteComponent, TeamComponent, TopModelComponent, IndexComponent, RentComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    PageSliderComponent,
    ContactComponent,
    DescriptionComponent,
    OutModelComponent,
    QuoteComponent,
    TeamComponent,
    TopModelComponent
  ],
    imports: [
        CommonModule,
        BuyerRoutingModule,
        FormsModule
    ]
})
export class BuyerModule { }
