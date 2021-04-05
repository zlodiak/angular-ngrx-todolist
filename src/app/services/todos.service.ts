import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TodoType } from "../store/state";

@Injectable({
  providedIn: "root",
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/todos");
  }

  addTodo(todo: TodoType): Observable<any> {
    return this.http.post<any>("http://localhost:3000/todos", todo);
  }
}
