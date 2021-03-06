import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
//Components
import { AboutComponent } from './components/pages/about/about.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { ItemComponent } from './components/pages/item/item.component';
import { SearhComponent } from './components/shared/searh/searh.component';


const app_routes: Routes = [
  {path:'home', component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'search/:termino', component: SearhComponent},
  {path:'**',pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports:[
    RouterModule.forRoot( app_routes, {useHash :true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}








