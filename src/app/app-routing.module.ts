import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatinumComponent } from './platinum/platinum.component';

const routes: Routes = [
  {path:"", component:PlatinumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
