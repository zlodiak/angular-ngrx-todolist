import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";

import { TodosService } from "../services/todos.service";
import {
  addTodoAction,
  createTodoActionType,
  prioritizeTodoBackendActionType,
  setPriorityTodoAction,
  toggleTodoAction,
  toggleTodoBackendActionType,
} from "../store/actions";
import { TodoType } from "./state";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodoActionType),
      mergeMap((todo: TodoType) =>
        this.todosService
          .addTodo({
            id: todo.id,
            text: todo.text,
            isCompleted: todo.isCompleted,
            priority: todo.priority,
          })
          .pipe(
            map((res) => {
              return addTodoAction({
                isCompleted: res.isCompleted,
                text: res.text,
                priority: res.priority,
                id: res.id,
              });
            }),
            catchError(() => EMPTY)
          )
      )
    )
  );

  toggleTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(toggleTodoBackendActionType),
      mergeMap((todo: TodoType) =>
        this.todosService
          .toggleTodo({
            id: todo.id,
            text: todo.text,
            isCompleted: !todo.isCompleted,
            priority: todo.priority,
          })
          .pipe(
            map((res) => {
              return toggleTodoAction(res);
            }),
            catchError(() => EMPTY)
          )
      )
    )
  );

  prioritizeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(prioritizeTodoBackendActionType),
      mergeMap((t: { priority: number; todo: TodoType }) =>
        this.todosService
          .prioritizeTodo({
            id: t.todo.id,
            text: t.todo.text,
            isCompleted: t.todo.isCompleted,
            priority: t.priority,
          })
          .pipe(
            map((res) => {
              return setPriorityTodoAction(res);
            }),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
