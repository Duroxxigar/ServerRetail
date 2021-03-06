import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {PricingComponent} from './pricing/pricing.component';
import {AboutComponent} from './about/about.component';
import {FormsModule} from '@angular/forms';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { ServerPriceComponent } from './pricing/server-price/server-price.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServersComponent,
    PricingComponent,
    AboutComponent,
    TestimonialComponent,
    ServerPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
