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
    checked: false,
  };
  const todo = createTodo(formData);
  addTodoToProject(project, todo);
  updateProject(storage, project);
  saveToLocalStorage(storage);
}
