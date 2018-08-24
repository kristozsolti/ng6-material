import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getToDos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}
