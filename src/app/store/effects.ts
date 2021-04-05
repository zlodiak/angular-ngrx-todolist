import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";

import { TodosService } from "../services/todos.service";
import { addTodoAction, createTodoActionType } from "../store/actions";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosService: TodosService) {}

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodoActionType),
      mergeMap((todo: any) =>
        this.todosService.addTodo(todo).pipe(
          map(() => {
            return addTodoAction({ todo });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
