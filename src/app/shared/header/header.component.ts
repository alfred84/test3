import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  
  term: string = '';
  searchedTerms: string[] = [];

  constructor(private peopleService: PeopleService, private router: Router){}

  ngOnInit(): void {
      this.loadSearchedTerms();
  }

  search(reusableTerm?: string) {    

    if (reusableTerm) {      
      this.peopleService.filterPeopleByName(reusableTerm);
      this.loadSearchedTerms();
    } else {      
      this.peopleService.filterPeopleByName(this.term);
      this.loadSearchedTerms();
    }
    
  }

  loadSearchedTerms() {
    this.searchedTerms = this.peopleService.getFromLocalStorage();
  }

}
