export interface TodoType {
  isCompleted: boolean;
  text: string;
  priority: number;
  id?: any;
}

export interface StateType {
  todos: TodoType[];
}
