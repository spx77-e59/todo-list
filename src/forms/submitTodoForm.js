import createTodo from "../functions/createTodo.js";
import addTodoToProject from "../functions/addTodoToProject.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";
import updateProject from "../functions/updateProject.js";
import generateUniqueID from "../functions/generateUniqueID.js";

export default function (event, form, project, storage) {
  event.preventDefault();
  const formData = {
    id: generateUniqueID(),
    title: form.titleInput.value,
    description: form.descriptionInput.value,
    dueDate: form.dueDateInput.value,
    priority: form.priorityInput.value,
    notes: form.notesInput.value,
    checked: form.checkedInput.checked,
  };
  const todo = createTodo(formData);
  console.log("todo:", todo);
  addTodoToProject(project, todo);
  console.log("project after:", project.todos);
  updateProject(storage, project);
  saveToLocalStorage(storage);
  console.log("submit", storage);
}
