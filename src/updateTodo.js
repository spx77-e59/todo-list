export default function(todo, updatedTodo) {
  todo.title = updatedTodo.title;
  todo.description = updatedTodo.description;
  todo.dueDate = updatedTodo.dueDate;
  todo.priority = updatedTodo.priority;
  todo.notes = updatedTodo.notes;
  todo.checked = updatedTodo.checked;
}