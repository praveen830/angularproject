import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navigatecomponent/home/home.component';
import { ProjectsComponent } from './navigatecomponent/projects/projects.component';
import { AboutsComponent } from './navigatecomponent/abouts/abouts.component';
import { AchivementsComponent } from './navigatecomponent/achivements/achivements.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent//deafult routing
  },
  {
    path:'projects',component:ProjectsComponent//normal routing
  },
  {
    path:'abouts',component:AboutsComponent//normal routing
  },
  {
    path:'achivements',component:AchivementsComponent //normal routing
  },
  {
    path:'**',component:HomeComponent//wildcard routing

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
