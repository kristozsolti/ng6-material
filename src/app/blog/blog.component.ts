import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  menuItems = [
    { link: 'posts', icon: 'view_list',              label: 'Posts'   },
    { link: 'users', icon: 'supervised_user_circle', label: 'Users'   },
    { link: 'todos', icon: 'playlist_add_check',     label: 'ToDo\'s' },
  ];
  activeLink = this.menuItems[0].label;

  constructor() { }

  ngOnInit() {
  }

}
