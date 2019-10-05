import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ComponetnotfoundComponent } from './componetnotfound/componetnotfound.component';
import {SharedModule} from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component'
@NgModule({
  declarations: [
    AppComponent,
  
    AboutComponent,
    HomeComponent,
    ComponetnotfoundComponent,
    WelcomeComponent,
    ProductInfoComponent,
    ProductDetailsComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
