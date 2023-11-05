import { Injectable } from '@angular/core';
import { ToDoItem } from '../interfaces/to-do-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';
const defaultTodoList: ToDoItem[] = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: ToDoItem[];

  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  getTodoList(): ToDoItem[] {
    return this.todoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  addTodoList(item: ToDoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: ToDoItem, changes): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: ToDoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
