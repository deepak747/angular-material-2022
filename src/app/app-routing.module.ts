import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path:'login',
    component:LoginComponent
},
{
  path:'blog',
  component:BlogpageComponent
},
      {
        path:'blog-details',
      component:BlogdetailsComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
