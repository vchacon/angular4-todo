import { Component } from '@angular/core';
import { Todo } from './shared/todo';
import { TodoDataService } from './shared/service/todo-data.service';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'td';

  constructor(private todoDataService: TodoDataService) {

  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // rename from removeTodo
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

}



