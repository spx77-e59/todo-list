export default function (Project, Todo) {
  const todoToDeleteIndex = Project.todos.findIndex(
    (todo) => todo.id === Todo.id
  );
  Project.todos.splice(todoToDeleteIndex, 1);
}
