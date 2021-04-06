import { createReducer, on } from "@ngrx/store";
import {
  addTodoAction,
  toggleTodoAction,
  setPriorityTodoAction,
  clearTodosAction,
} from "./actions";
import { TodoType } from "./state";

export const todosReducer = createReducer(
  { todos: [] },
  on(addTodoAction, (state, todo: TodoType) => ({
    todos: [
      ...state.todos,
      {
        id: todo.id,
        text: todo.text,
        isCompleted: todo.isCompleted,
        priority: todo.priority,
      },
    ],
  })),
  on(clearTodosAction, (state, todo: TodoType) => ({
    todos: [],
  })),
  on(toggleTodoAction, (state, { id }) => ({
    todos: state.todos.map((todo: TodoType) => {
      if (id === todo.id) {
        return {
          id: todo.id,
          isCompleted: !todo.isCompleted,
          priority: todo.priority,
          text: todo.text,
        };
      }
      return todo;
    }),
  })),
  on(setPriorityTodoAction, (state, t: TodoType) => ({
    todos: state.todos.map((todo: TodoType) => {
      if (t.id === todo.id) {
        return {
          id: todo.id,
          isCompleted: todo.isCompleted,
          priority: t.priority,
          text: todo.text,
        };
      }
      return todo;
    }),
  }))
);
