export default function (Project, Todo) {
  const todoToUpdateIndex = Project.todos.findIndex(
    (todo) => todo.id === Todo.id
  );
  Project.todos.splice(todoToUpdateIndex, 1);
  Project.todos.push(Todo);
}
