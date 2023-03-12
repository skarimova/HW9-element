import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TermsPageComponent } from './terms-page/terms-page.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';

const routes: Routes = [{
    path: '', component: MainPageComponent, children: [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: 'contact', component: ContactPageComponent},
        {path: 'information', component: InformationPageComponent},
        {path: 'terms', component: TermsPageComponent},
        {path: 'testimonials', component: TestimonialsPageComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
