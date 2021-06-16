import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable()
export class TodosResolver implements Resolve<Todo[]> {
  constructor(private readonly http: HttpClient) {}

  resolve(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
