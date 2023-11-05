import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      class="todo-input"
      #inputRef
      (keyup.enter)="submitValue(getInputValue($event))"
      [value]="defaultValue"
    />
    <button class="btn" (click)="submitValue(inputRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent implements OnInit {
  title: string;
  @Input() defaultValue: string = '';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.title = 'First title';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Second title';
    }, 3000);
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
