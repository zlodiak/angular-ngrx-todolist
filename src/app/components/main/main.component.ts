import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  toggleTodoBackendAction,
  prioritizeTodoBackendAction,
  deleteTodoAction,
} from "src/app/store/actions";
import { selectFilterValue, selectTodos } from "src/app/store/selectors";
import { TodoType } from "src/app/store/state";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  filterValue$ = this.store.pipe(select(selectFilterValue));
  todos$ = this.store.pipe(select(selectTodos));
  priorityOptions = ["High", "Medium", "Low"];

  constructor(private store: Store) {}

  ngOnInit() {}

  toggleComplete(event: any, todo: TodoType) {
    this.store.dispatch(toggleTodoBackendAction(todo));
  }

  changePriority(priority: number, todo: TodoType) {
    this.store.dispatch(prioritizeTodoBackendAction({ priority, todo }));
  }

  checkFilter(globalFilter: string, todoIsCimpleted: boolean) {
    return (
      (globalFilter === "completed" && todoIsCimpleted) ||
      (globalFilter === "active" && !todoIsCimpleted) ||
      globalFilter === "all"
    );
  }
}
