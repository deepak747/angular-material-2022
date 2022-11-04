import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design/material-design.module';
import { LoginComponent } from './login/login.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogpageComponent,
    SingleBlogComponent,
    BlogdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
