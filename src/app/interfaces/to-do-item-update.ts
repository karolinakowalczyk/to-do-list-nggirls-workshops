import { ToDoItem } from './to-do-item';

export interface ToDoItemUpdate {
  item: ToDoItem;
  changes: { title?: string; completed?: boolean };
}
