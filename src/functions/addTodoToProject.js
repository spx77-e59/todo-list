export default function (Project, Todo) {
  if (Project.todos.length === 0) {
    Project.todos.push(Todo);
  } else if (Project.todos.some((todo) => todo.checked === true)) {
    const indexOfFirstChecked = Project.todos.findIndex(
      (todo) => todo.checked === true
    );
    const start = indexOfFirstChecked === 0 ? 0 : indexOfFirstChecked;
    Project.todos.splice(start, 0, Todo);
  } else {
    Project.todos.push(Todo);
  }
}
