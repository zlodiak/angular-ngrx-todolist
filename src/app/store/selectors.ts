import { createSelector } from "@ngrx/store";

const todosState = (state) => state.todos;
const filterState = (state) => state.filter;

export const selectTodos = createSelector(todosState, (todos) => todos);
export const selectFilterValue = createSelector(
  filterState,
  (filterValue) => filterValue
);
