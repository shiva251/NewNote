import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';


const routes: Routes = [
  // { path: 'list', component: MiddleComponent },
  {
    path: 'list', component: RightComponent,

    // children: [
    //   {
    //     path: 'link',
    //     component: RightComponent,
    //   }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [AppComponent, RightComponent]
