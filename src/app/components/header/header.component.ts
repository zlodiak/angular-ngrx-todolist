import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { addTodoAction, createTodoAction } from "src/app/store/actions";
import { TodoType } from "src/app/store/state";

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
    if (!todoText.trim()) {
      return;
    }
    const todo: TodoType = {
      isCompleted: false,
      text: todoText,
      priority: 2,
      id: new Date().getTime() / 1000,
    };
    this.store.dispatch(createTodoAction(todo));
    this.todoText.nativeElement.value = "";
  }
}
