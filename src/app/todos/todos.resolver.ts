import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, finalize, map } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { Todo } from './todo.model';

@Injectable()
export class TodosResolver implements Resolve<Todo[]> {
  constructor(
    private readonly alertService: AlertService,
    private readonly http: HttpClient
  ) {}

  resolve(): Observable<Todo[]> {
    this.alertService.addInfoAlert('Loading todos');
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        delay(2000),
        map((todos) => {
          return todos.map((todo) => {
            todo.title += '🥳';
            return todo;
          });
        }),
        finalize(() => {
          this.alertService.addInfoAlert('Todos loaded');
        })
      );
  }
}
