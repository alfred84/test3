import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../../../services/films.service';
import { Film } from '../../../../interfaces/films';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrl: './films-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsDetailComponent implements OnInit {

  filmSelected?: Film;

  constructor(private filmsService: FilmsService, private route: ActivatedRoute, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getFilmsById(params['id']))
  }

  getFilmsById( id: string) {
    this.filmsService.getFilmsById(id)
    .subscribe( (resp: Film) => {
      this.filmSelected = resp;
      this.ref.markForCheck();
    });    
  }

}
