import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem } from '../interfaces/to-do-item';
import { ToDoItemUpdate } from '../interfaces/to-do-item-update';

@Component({
  selector: 'app-to-do-item',
  template: `<div class="todo-item">
    <app-input-button-unit
      *ngIf="isEditable; else notEditableInput"
      (submit)="submitItem($event)"
      [defaultValue]="item.title"
    ></app-input-button-unit>
    <ng-template #notEditableInput>
      <input
        type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item.completed"
      />
      <span
        class="todo-title"
        [ngClass]="{ 'todo-complete': item.completed }"
        (click)="editItemValue()"
        >{{ item.title }}</span
      >
    </ng-template>
    <button class="btn btn-red" (click)="removeItem()">remove</button>
  </div>`,
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent {
  @Input() item: ToDoItem;
  @Output() remove: EventEmitter<ToDoItem> = new EventEmitter<ToDoItem>();
  @Output() update: EventEmitter<ToDoItemUpdate> =
    new EventEmitter<ToDoItemUpdate>();
  isEditable = false;

  constructor() {}

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }

  editItemValue() {
    this.isEditable = !this.isEditable;
  }

  submitItem(name: string) {
    this.isEditable = !this.isEditable;
    this.update.emit({
      item: this.item,
      changes: { title: name },
    });
  }
}
