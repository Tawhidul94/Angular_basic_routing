import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    component:HomeComponent,
    path:' '
  },
  {
    component:AboutComponent,
    path:'about',
    children:[
      {
        component:AboutMeComponent,
        path:'me'
      },
      {
        component:AboutCompanyComponent,
        path:'company'
      }
    ]

  },

  {
    component:UserComponent,
    path:'user/:id'
  },
  {
    component:NoPageComponent, 
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
