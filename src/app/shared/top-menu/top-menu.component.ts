import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TopMenuComponent implements OnInit {

  menuItems!: MenuItem[]; 
  
  constructor(private router: Router, private peopleService: PeopleService) {}

  ngOnInit(): void {

    this.menuItems = [
      { name: 'films', link: '/films' },
      { name: 'people', link: '/people' },
      { name: 'planets', link: '/planets' },
      { name: 'species', link: '/species' },
      { name: 'starships', link: '/starships' },
      { name: 'vehicles', link: '/vehicles' }      
    ];
      
  }

  loadCurrentData() { 
    let currentUrl = this.router.url;    
    if(currentUrl === '/people') {
      this.peopleService.getAllPeoplesByPage();
    }
  }

}
