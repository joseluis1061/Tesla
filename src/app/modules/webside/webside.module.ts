import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsideRoutingModule } from './webside-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModelcarComponent } from './components/modelcar/modelcar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from '@angular/cdk/dialog';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    WelcomeComponent,
    ModelcarComponent,
    MenuMobileComponent
  ],
  imports: [
    CommonModule,
    WebsideRoutingModule,
    OverlayModule,
    DialogModule
  ],
  exports: [
    LandingComponent,
    HeaderComponent,
    WelcomeComponent
  ]
})
export class WebsideModule { }
