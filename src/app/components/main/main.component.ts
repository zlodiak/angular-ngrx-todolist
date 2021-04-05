import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  toggleTodoAction,
  setPriorityTodoAction,
  toggleTodoBackendAction,
  prioritizeTodoBackendAction,
} from "src/app/store/actions";
import { selectTodos } from "src/app/store/selectors";
import { TodoType } from "src/app/store/state";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  todos$ = this.store.pipe(select(selectTodos));
  priorityOptions = ["High", "Medium", "Low"];

  constructor(private store: Store) {}

  ngOnInit() {}

  toggleComplete(event: any, todo: TodoType) {
    this.store.dispatch(toggleTodoBackendAction(todo));
  }

  changePriority(priority: number, todo: TodoType) {
    console.log({ priority, todo });
    this.store.dispatch(prioritizeTodoBackendAction({ priority, todo }));
  }
}
