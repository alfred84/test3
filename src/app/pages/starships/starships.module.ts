import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './page/starships.component';
import { SharedModule } from '../../shared/shared.module';
import { StarshipsRoutingModule } from './starships-routing.module';



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
