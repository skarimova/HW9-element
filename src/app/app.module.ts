import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactPageComponent,
    InformationPageComponent,
    TermsPageComponent,
    TestimonialsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
