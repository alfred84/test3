import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../../../../interfaces/person';
import { PeopleService } from '../../../../services/people.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit, OnDestroy {

  personsByPage: Person[] = [];
  next: string | null = null;
  previous: string | null = null;  

  private subscription: Subscription = new Subscription();
  

  constructor(private peopleService: PeopleService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.peopleService.getAllPeoplesByPage();
    this.loadPeople();
  }

  loadPeople() {    
      this.subscription = this.peopleService.people$.subscribe((data) => {
      this.personsByPage = data.results;
      this.next = data.next;
      this.previous = data.previous;
      this.ref.markForCheck();
    });    
  }

  onNext() {
    if (this.next) {
      this.peopleService.loadPage(this.next);
    }
  }

  onPrevious() {
    if (this.previous) {
      this.peopleService.loadPage(this.previous);
    }
  }  

  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

}
