export default function(todo, formData) {
  todo.title = formData.title;
  todo.description = formData.description;
  todo.dueDate = formData.dueDate;
  todo.priority = formData.priority;
  todo.notes = formData.notes;
  todo.checked = formData.checked;
}