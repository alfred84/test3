import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsDetailComponent } from './page/detail/films-detail.component';
import { FilmsListComponent } from './page/list/films-list.component';
import { FilmsRoutingModule } from './films-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FilmsDetailComponent,
    FilmsListComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ]
})
export class FilmsModule { }
