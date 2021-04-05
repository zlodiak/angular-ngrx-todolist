import { TodosService } from "./services/todos.service";

export function appInitializer(todosService: TodosService) {
  return () =>
    new Promise((resolve) => {
      todosService.fillTodos();
      resolve("Resolving");
    });
}
