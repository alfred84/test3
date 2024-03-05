import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './page/species.component';



@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
