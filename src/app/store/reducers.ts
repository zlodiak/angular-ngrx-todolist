import { createReducer, on } from "@ngrx/store";
import {
  addTodoAction,
  editTodoAction,
  setPriorityTodoAction,
} from "./actions";
import { TodoType } from "./state";

export const todosReducer = createReducer(
  { todos: [] },
  on(addTodoAction, (state, { todo }) => ({
    todos: [
      ...state.todos,
      {
        isCompleted: false,
        text: todo,
        priority: 2,
        id: new Date().getTime() / 1000,
      },
    ],
  })),
  on(editTodoAction, (state, { id }) => ({
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
  on(setPriorityTodoAction, (state, { priority, id }) => ({
    todos: state.todos.map((todo: TodoType) => {
      if (id === todo.id) {
        return {
          id: todo.id,
          isCompleted: todo.isCompleted,
          priority: +priority,
          text: todo.text,
        };
      }
      return todo;
    }),
  }))
);
