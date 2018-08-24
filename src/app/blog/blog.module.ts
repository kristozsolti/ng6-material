import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PostsComponent, UsersComponent, TodosComponent],
  exports: [ CommonModule ]
})
export class BlogModule { }
