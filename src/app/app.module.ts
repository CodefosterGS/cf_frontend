import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const appRoutes: Routes =[
  {path:'',component: HomePageComponent,pathMatch:'full'},
  {path:'test',component:ExperimentComponent, pathMatch:'full'},
  {path:'about',component:AboutPageComponent, pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ExperimentComponent,
    HomePageComponent,
    NavBarComponent,
    CarouselComponent
    AboutPageComponent
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
