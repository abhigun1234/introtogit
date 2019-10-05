import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'
import {ComponetnotfoundComponent} from './componetnotfound/componetnotfound.component'
import {WelcomeComponent} from './welcome/welcome.component'
const routes: Routes = [{path:'welcome',component:WelcomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
