import { createSelector } from "@ngrx/store";
import { TodoType } from "./state";

const todosState = (state) => state.todos;
const filterState = (state) => state.filter;

export const selectTodos = createSelector(todosState, (todos) => todos);
export const selectFilterValue = createSelector(
  filterState,
  (filterValue) => filterValue
);
export const selectActiveItems = createSelector(
  todosState,
  (todos: TodoType[]) => {
    return todos["todos"].filter((todo: TodoType) => {
      if (!todo.isCompleted) {
        return todo;
      }
    });
  }
);
