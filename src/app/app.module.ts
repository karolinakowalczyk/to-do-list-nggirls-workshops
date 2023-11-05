import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    ToDoItemComponent,
    ListManagerComponent,
  ],
  imports: [BrowserModule],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
