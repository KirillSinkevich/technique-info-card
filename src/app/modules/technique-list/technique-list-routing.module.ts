import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechniqueListComponent} from "./technique-list.component";

const routes: Routes = [
  { path: '', component: TechniqueListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniqueListRoutingModule { }
