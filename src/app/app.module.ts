import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { TeamProfileCardComponent } from './components/team-profile-card/team-profile-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes =[
  {path:'',component: HomePageComponent,pathMatch:'full'},
  {path:'test',component:ExperimentComponent, pathMatch:'full'},
  {path:'events',component:EventsPageComponent, pathMatch:'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    HomePageComponent,
    NavBarComponent,
    CarouselComponent,
    EventsPageComponent,
    TeamProfileCardComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
