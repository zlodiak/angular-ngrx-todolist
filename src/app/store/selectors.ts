import { createSelector } from "@ngrx/store";

const todosState = (state) => state.todos;

export const selectTodos = createSelector(todosState, (todos) => todos);
