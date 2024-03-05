import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, ReplaySubject, map, of } from 'rxjs';
import { Person, PersonResponse } from '../interfaces/person';
import { Homeworld } from '../interfaces/homeworld';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = environment.apiUrl;
  
  peopleSubject = new BehaviorSubject<PersonResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  constructor(@Inject('config') private config: number, private http: HttpClient) { }

  getAllPeoplesByPage() {
    this.http.get<PersonResponse>(`${this.apiUrl}/people/`).subscribe((data) => {
      this.peopleSubject.next(data);
    });
  }

  loadPage(url: string) {
    this.http.get<PersonResponse>(url).subscribe((data) => {
      this.peopleSubject.next(data);
    });
  }

  getHomeWorldByUrl(url: string): Observable<string> {
    return this.http.get<Homeworld>(url).pipe(
      map(response => response.name)
    );
  }

  getPeopleById(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/people/${id}`);
  }

  filterPeopleByName(term: string) {
    this.http.get<PersonResponse>(`${this.apiUrl}/people/?search=${term}`).subscribe((data) => {
      this.peopleSubject.next(data);
    });
    this.saveTerm(term);
  }

  get people$() {
    return this.peopleSubject.asObservable();
  }

  saveTerm(term: string): void {
    const existingTerms = this.getFromLocalStorage();
    existingTerms.push(term);

    // Si hay más de 4 elementos, elimina el primero
    if (existingTerms.length > this.config) {
      existingTerms.shift();
    }

    localStorage.setItem('searchedTerms', JSON.stringify(existingTerms));
  }

  // Obtiene los elementos del localStorage
  getFromLocalStorage(): string[] {
    const storedTerms = localStorage.getItem('searchedTerms');
    return storedTerms ? JSON.parse(storedTerms) : [];
  }


}
