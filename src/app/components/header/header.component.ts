import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { addTodoAction } from "src/app/store/actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("todoText", { static: true }) todoText: ElementRef;

  constructor(private store: Store) {}

  ngOnInit() {}

  createTodo(todoText: string) {
    this.store.dispatch(addTodoAction({ todo: todoText }));
    this.todoText.nativeElement.value = "";
  }
}
