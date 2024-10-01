import Todo from "../classes/Todo.js";

export default function (form) {
  const todo = new Todo(
    form.title,
    form.description,
    from.dueDate,
    form.priority,
    form.notes,
    form.checked
  );
  return todo;
}
