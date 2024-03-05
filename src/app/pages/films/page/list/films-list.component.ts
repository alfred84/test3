import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Film } from '../../../../interfaces/films';
import { environment } from '../../../../../environments/environment';
import { FilmsService } from '../../../../services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsListComponent implements OnInit {

  filmsByPage: Film[] = [];
  next: string | null = null;
  previous: string | null = null;

  private initialUrl = `${environment.apiUrl}/films/`;

  constructor(private filmsService: FilmsService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadFilms(this.initialUrl);
  }

  loadFilms(url: string) {
    this.filmsService.getFilmsByPage(url).subscribe(data => {
      this.filmsByPage = data.results;
      this.next = data.next;
      this.previous = data.previous;
      this.ref.markForCheck();
    });
  }

  onNext() {
    if (this.next) {
      this.loadFilms(this.next);
    }
  }

  onPrevious() {
    if (this.previous) {
      this.loadFilms(this.previous);
    }
  }

}
