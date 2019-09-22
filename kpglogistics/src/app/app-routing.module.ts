import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  { path: '', component: HomeCarouselComponent },
  { path: 'home', component: HomeCarouselComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'service', component: ServiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
