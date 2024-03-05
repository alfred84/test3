import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './page/list/people-list.component';
import { PeopleDetailComponent } from './page/detail/people-detail.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: ':id', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }