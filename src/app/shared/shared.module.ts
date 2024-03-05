import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NumeroTextoPipe } from './pipes/numero-texto.pipe';
import { HomeworldPipe } from './pipes/homeworld.pipe';
import { DetailsLinkPipe } from './pipes/details-link.pipe';
import { WorkProgressComponent } from './work-progress/work-progress.component';


@NgModule({
  declarations: [
    HeaderComponent,
    TopMenuComponent,
    NumeroTextoPipe,
    HomeworldPipe,
    DetailsLinkPipe,
    WorkProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    TopMenuComponent,
    NumeroTextoPipe,
    HomeworldPipe,
    DetailsLinkPipe,
    WorkProgressComponent
  ]
})
export class SharedModule { }
