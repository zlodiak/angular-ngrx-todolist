export interface TodoType {
  isCompleted: boolean;
  text: string;
  priority: 0 | 1 | 2;
  id: number;
}

export interface StateType {
  todos: TodoType[];
}
