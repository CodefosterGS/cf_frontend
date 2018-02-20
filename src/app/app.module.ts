import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { TeamProfileCardComponent } from './components/team-profile-card/team-profile-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DescriptionComponent } from './components/description/description.component';

const appRoutes: Routes =[
  {path:'',component: HomePageComponent,pathMatch:'full'},
  // {path:'test',component:ExperimentComponent, pathMatch:'full'},
  {path:'about',component:AboutPageComponent, pathMatch:'full'},
  {path:'events',component:EventsPageComponent, pathMatch:'full'},
  // {path:'experiment',component:ExperimentComponent, pathMatch:'full'}
  
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // ExperimentComponent,
    HomePageComponent,
    NavBarComponent,
    CarouselComponent,
    AboutPageComponent,
    CarouselComponent,
    EventsPageComponent,
    TeamProfileCardComponent,
    ContactFormComponent,
    FooterComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
