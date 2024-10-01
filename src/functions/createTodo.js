import Todo from "../classes/Todo.js";

export default function (formData) {
  const todo = new Todo(
    formData.id,
    formData.title,
    formData.description,
    formData.dueDate,
    formData.priority,
    formData.notes,
    formData.checked
  );
  return todo;
}
