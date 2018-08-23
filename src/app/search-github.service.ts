import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
  users: any;

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get('https://api.github.com/users');
  }

  getUserById(id: number) {
    return this.http.get('https://api.github.com/users/' + id);
  }
}
