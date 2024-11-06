import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrioritiesComponent } from './Components/priorities/priorities.component';

const routes: Routes = [
  {path:"",component:PrioritiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
