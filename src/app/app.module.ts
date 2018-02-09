import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
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
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
