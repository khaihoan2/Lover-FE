import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

<<<<<<< HEAD
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {BuyerModule} from './buyer/buyer.module';
>>>>>>> develop

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
<<<<<<< HEAD
  providers: [],
=======
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BuyerModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},

  ],
>>>>>>> develop
  bootstrap: [AppComponent]
})
export class AppModule {
}
