import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  todos$ = this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts');

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts').subscribe(todos => {
      this.todos = todos;
    });
  }
}
