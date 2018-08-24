import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
