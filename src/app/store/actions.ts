import { createAction, props } from "@ngrx/store";
import { TodoType } from "./state";

export const createTodoActionType = "[simple todo] Create todo";
export const toggleTodoBackendActionType = "[simple todo] Toggle todo backend";
export const prioritizeTodoBackendActionType =
  "[simple todo] Prioritize todo backend";
export const deleteTodoBackendAction = createAction(
  "[simple todo] Delete todo backend",
  props<{ id: number }>()
);

export const deleteTodoAction = createAction(
  "[simple todo] Delete todo",
  props<{ id: number }>()
);

export const clearTodosAction = createAction("[simple todo] Clear todos");
export const clearCompletedTodosAction = createAction(
  "[simple todo] Clear completed todos"
);

export const addTodoAction = createAction(
  "[simple todo] Add todo",
  props<TodoType>()
);

export const toggleTodoAction = createAction(
  "[simple todo] Toggle todo",
  props<any>()
);

export const setPriorityTodoAction = createAction(
  "[simple todo] SetPriority todo",
  props<TodoType>()
);

export const createTodoAction = createAction(
  createTodoActionType,
  props<TodoType>()
);

export const toggleTodoBackendAction = createAction(
  toggleTodoBackendActionType,
  props<TodoType>()
);

export const prioritizeTodoBackendAction = createAction(
  prioritizeTodoBackendActionType,
  props<{ priority: number; todo: TodoType }>()
);

export const setFilterAction = createAction(
  "[simple filter] Set filter",
  props<{ filterValue: string }>()
);

export const clearCompletedTodoBackendAction = createAction(
  prioritizeTodoBackendActionType
);
