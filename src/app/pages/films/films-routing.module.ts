import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './page/list/films-list.component';
import { FilmsDetailComponent } from './page/detail/films-detail.component';

const routes: Routes = [
  { path: '', component: FilmsListComponent },
  { path: ':id', component: FilmsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }