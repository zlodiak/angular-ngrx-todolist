import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { editTodoAction, setPriorityTodoAction } from "src/app/store/actions";
import { selectTodos } from "src/app/store/selectors";

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

  toggleComplete(event: any, id: number) {
    this.store.dispatch(editTodoAction({ id: id }));
  }

  changePriority(value: number, id: number) {
    console.log(value);
    this.store.dispatch(setPriorityTodoAction({ priority: value, id: id }));
  }
}
