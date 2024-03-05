import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../../interfaces/person';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleDetailComponent implements OnInit {

  personSelected?: Person;

  constructor( private peopleService: PeopleService, private route: ActivatedRoute, private ref: ChangeDetectorRef){}

  ngOnInit(): void {    
    this.route.params.subscribe(params => this.getPersonById(params['id']))      
  }

  getPersonById( id: string) {
    this.peopleService.getPeopleById(id)
    .subscribe( (resp: Person) => {
      this.personSelected = resp;
      this.ref.markForCheck();
    });    
  }

}
