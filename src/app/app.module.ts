import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const appRoutes: Routes =[
  {path:'',component: HomePageComponent,pathMatch:'full'},
  {path:'test',component:ExperimentComponent, pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
