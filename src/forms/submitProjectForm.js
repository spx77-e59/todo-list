import createProject from "../functions/createProject.js";
import addProjectToStorage from "../functions/addProjectToStorage.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";
import generateUniqueID from "../functions/generateUniqueID.js";

export default function (event, form, storage) {
  event.preventDefault();
  console.log(form.projectTitleInput.value);
  const formData = {
    id: generateUniqueID(),
    title: form.projectTitleInput.value,
    todos: [],
  };
  const project = createProject(formData);
  addProjectToStorage(storage, project);
  saveToLocalStorage(storage);
}
