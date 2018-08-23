import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-github',
  templateUrl: './search-github.component.html',
  styleUrls: ['./search-github.component.scss']
})
export class SearchGithubComponent implements OnInit {
  allUsers: any;
  username: string;
  filteredUsers: any;

  constructor(private searchService: SearchGithubService) { }

  ngOnInit() {
    this.searchService.getAllUser().subscribe(
      users => {
        this.allUsers = users;
        this.filteredUsers = users;
      }
    );
  }

  searchUser(username) {
    this.filteredUsers = this.allUsers.filter(
      user => user.login.includes(username)
    );
  }

}
