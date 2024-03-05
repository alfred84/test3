import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Film, FilmsResponse } from '../interfaces/films';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Método para obtener todos los personajes paginado
  getFilmsByPage(url: string): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(url);
  }

  getFilmsById(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/films/${id}`);
  }
}
