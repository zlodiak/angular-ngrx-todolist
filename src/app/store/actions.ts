import { createAction, props } from "@ngrx/store";
import { TodoType } from "./state";

export const createTodoActionType = "[simple todo] Create todo";

export const addTodoAction = createAction(
  "[simple todo] Add todo",
  props<{ todo }>()
);

export const editTodoAction = createAction(
  "[simple todo] Edit todo",
  props<{ id }>()
);

export const setPriorityTodoAction = createAction(
  "[simple todo] SetPriority todo",
  props<{ priority: number; id: number }>()
);

export const createTodoAction = createAction(
  createTodoActionType,
  props<{ todo }>()
);
