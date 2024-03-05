import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './page/list/people-list.component';
import { PeopleDetailComponent } from './page/detail/people-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleDetailComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
export class PeopleModule { }
