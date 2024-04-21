import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from '../components/header/header.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    WelcomeComponent
  ]
})
export class WebsideModule { }
