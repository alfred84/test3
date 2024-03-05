import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PlanetsComponent } from './page/planets.component';



@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
