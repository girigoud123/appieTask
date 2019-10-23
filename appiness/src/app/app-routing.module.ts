import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhubchildComponent } from './ghubcomp/ghubchild/ghubchild.component';
import { GhublistComponent } from './ghubcomp/ghublist/ghublist.component';

const routes: Routes = [
  {
    path:'',
    component:GhubchildComponent
  },
  {
    path:"login",
    component:GhublistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
