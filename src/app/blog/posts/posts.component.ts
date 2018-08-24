import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }

}
