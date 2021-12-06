import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

<<<<<<< HEAD
import {BuyerRoutingModule} from './buyer-routing.module';
import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './shared/header/header.component';
import {TopModelComponent} from './top-model/top-model.component';
import {DescriptionComponent} from './shared/description/description.component';
import {OutModelComponent} from './shared/out-model/out-model.component';
import {GalleryModelComponent} from './gallery-model/gallery-model.component';
import {QuoteComponent} from './shared/quote/quote.component';
import {NewFaceComponent} from './new-face/new-face.component';
import {TeamComponent} from './shared/team/team.component';
import {ContactComponent} from './shared/contact/contact.component';
import {FooterComponent} from './shared/footer/footer.component';
=======
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
import { CartComponent } from './cart/cart.component';
import { InfoCartComponent } from './info-cart/info-cart.component';
>>>>>>> develop


@NgModule({
  declarations: [DescriptionComponent, OutModelComponent, GalleryModelComponent, QuoteComponent, NewFaceComponent, TeamComponent, ContactComponent, FooterComponent, InfoSellerComponent, PageSliderComponent, HeaderComponent, PageSliderComponent, ContactComponent, DescriptionComponent, OutModelComponent, QuoteComponent, TeamComponent, TopModelComponent, IndexComponent, RentComponent, CartComponent, InfoCartComponent],
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
export class BuyerModule {
}
