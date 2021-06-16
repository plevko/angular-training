import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];


  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.todos = this.route.snapshot.data.todos;
  }
}
