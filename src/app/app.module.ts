import { exploreComponent } from './explore.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './searcharea/search.component';
import { ModalComponent } from './navbar/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot([
    {path:'home', component: SearchComponent},
    {path: 'contactus', component:exploreComponent},
    {path:'searchterm', component:AppComponent}
  ]) 

],
  declarations: [ AppComponent, NavbarComponent, ModalComponent, SearchComponent, FooterComponent, exploreComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
