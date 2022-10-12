import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();


// localStorage.setItem()

todoList.todos.forEach(crearTodoHtml);