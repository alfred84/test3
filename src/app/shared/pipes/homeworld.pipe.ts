import { Pipe, PipeTransform, inject } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Observable, take } from 'rxjs';

@Pipe({
  name: 'homeworld'
})
export class HomeworldPipe implements PipeTransform {

  protected readonly peopleService: PeopleService =
  inject<PeopleService>(PeopleService);

  transform(value: string): Observable<string> {
    // return this.peopleService.getHomeWorldByUrl(value);
    return this.peopleService.getHomeWorldByUrl(value).pipe(take(1));
  }

}
