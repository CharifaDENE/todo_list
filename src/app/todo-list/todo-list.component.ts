import { Component, OnInit } from '@angular/core';
import { OrderBy} from ;
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
  editTodo(title: string){

   }
  addTodo() {
    const todo: Todo = {
      title: this.newTodoTitle,
      createdAt: new Date()
    };
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}

interface Todo {
  title: string;
  createdAt: Date;
}
