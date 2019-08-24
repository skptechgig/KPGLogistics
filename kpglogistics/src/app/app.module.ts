import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { ClientCardsComponent } from './client-cards/client-cards.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VehicleHomeListPageComponent } from './vehicle-home-list-page/vehicle-home-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarouselComponent,
    ClientCardsComponent,
    MissionVisionComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    VehicleHomeListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
