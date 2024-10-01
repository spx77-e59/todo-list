import createTodo from "../functions/createTodo.js";
import addTodoToProject from "../functions/addTodoToProject.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";

export default function (event, form, project, storage) {
  event.preventDefault();
  const todo = createTodo(form);
  console.table(todo);
  addTodoToProject(project, todo);
  saveToLocalStorage(storage);
  console.table("project", project.todos);
  console.table("storage", storage);
}
