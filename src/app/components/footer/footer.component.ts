import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  deleteTodoAction,
  deleteTodoBackendAction,
  setFilterAction,
} from "src/app/store/actions";
import {
  selectFilterValue,
  selectActiveItemsCount,
  selectUnactiveItems,
} from "src/app/store/selectors";
import { TodoType } from "src/app/store/state";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  filterValue$ = this.store.pipe(select(selectFilterValue));
  activeItems$ = this.store.pipe(select(selectActiveItemsCount));
  unactiveItems$ = this.store.pipe(select(selectUnactiveItems));

  constructor(private store: Store) {}

  ngOnInit() {}

  setFilter(filterValue: string) {
    this.store.dispatch(setFilterAction({ filterValue }));
  }

  clearCompleted() {
    this.unactiveItems$.subscribe((todos: TodoType[]) => {
      todos.forEach((todo: TodoType) => {
        this.store.dispatch(deleteTodoBackendAction({ id: todo.id }));
        // this.store.dispatch(deleteTodoAction({ id: todo.id }));
      });
    });
  }
}
