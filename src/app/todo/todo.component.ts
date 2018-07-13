import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-todos'
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTask: Todo = new Todo();
  todos = TODOS;

  constructor() { }
  addTodo() {
    const lastIndex = this.todos.length - 1;
    const last = this.todos[lastIndex];
    this.newTask.id = last.id + 1;
    this.newTask.status = false;
    this.newTask.trash = false;
    this.todos.push(this.newTask);
    this.newTask = new Todo();
  }

  toggleTodo(item) {
    item.status = !item.status;
  };

  moveToTrash(item) {
    item.trash = !item.trash
  };

  ngOnInit() {
  }

}
