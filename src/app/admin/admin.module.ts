import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AuthModule
  ]
})
export class AdminModule { }
