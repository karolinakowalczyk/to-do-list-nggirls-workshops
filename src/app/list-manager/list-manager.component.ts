import { Component, EventEmitter, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { ToDoItem } from '../interfaces/to-do-item';
import { ToDoItemUpdate } from '../interfaces/to-do-item-update';

@Component({
  selector: 'app-list-manager',
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of toDoList">
          <app-to-do-item
            [item]="todoItem"
            (remove)="removeItem($event)"
            (update)="updateItem($event)"
          ></app-to-do-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss'],
})
export class ListManagerComponent implements OnInit {
  toDoList: ToDoItem[];
  todoListService: TodoListService;
  constructor(todoListService: TodoListService) {
    this.todoListService = todoListService;
  }
  ngOnInit() {
    this.toDoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addTodoList({ title });
  }

  removeItem(item: ToDoItem) {
    this.todoListService.deleteItem(item);
  }

  updateItem(event: ToDoItemUpdate) {
    this.todoListService.updateItem(event.item, event.changes);
  }
}
