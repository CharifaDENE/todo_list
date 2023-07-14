import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
newTodoTitle : string = "";

  ngOnInit() { 

   }
   editTodo: Todo | null = null;
  
  addTodo() {
    const todo: Todo = {
      title: this.newTodoTitle,
      createdAt: new Date()
    };
    this.todos.push(todo);
  }

  editeTodo(todo: Todo) {
    this.editTodo = todo;
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  updateTodo() {
    if (this.editTodo) {
      this.editTodo = null;
    }
  }
  
}

interface Todo {
  title: string;
  createdAt: Date;
}

