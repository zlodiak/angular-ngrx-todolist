import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { Store } from "@ngrx/store";

import { TodoType } from "../store/state";
import { addTodoAction, clearTodosAction } from "../store/actions";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor(private http: HttpClient, private store: Store) {}

  getTodos(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/todos");
  }

  addTodo(todo: TodoType): Observable<any> {
    return this.http.post<any>("http://localhost:3000/todos", todo);
  }

  toggleTodo(todo: TodoType): Observable<any> {
    return this.http.put<any>("http://localhost:3000/todos/" + todo.id, {
      isCompleted: todo.isCompleted,
      text: todo.text,
      priority: todo.priority,
    });
  }

  prioritizeTodo(todo: TodoType): Observable<any> {
    return this.http.put<any>("http://localhost:3000/todos/" + todo.id, {
      isCompleted: todo.isCompleted,
      text: todo.text,
      priority: todo.priority,
    });
  }

  fillTodos() {
    timer(0, 10000)
      .pipe(switchMap(() => this.getTodos()))
      .subscribe((todos: TodoType[]) => {
        this.store.dispatch(clearTodosAction());
        todos.forEach((todo: TodoType) => {
          this.store.dispatch(addTodoAction(todo));
        });
      });
  }
}
