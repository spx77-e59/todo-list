import "./styles.css";
import createTodoForm from "./forms/createTodoForm.js";
import createProjectForm from "./forms/createProjectForm.js";
import Storage from "./classes/Storage.js";
import Project from "./classes/Project.js";
import saveToLocalStorage from "./functions/saveToLocalStorage.js";
import submitTodoForm from "./forms/submitTodoForm.js";
import generateUniqueID from "./functions/generateUniqueID.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const newTodoBtn = document.querySelector("#new-todo-btn");
const newProjectBtn = document.querySelector("#new-project-btn");
const projectsBtn = document.querySelector("#projects-btn");

const defaultProject = new Project("default project", []);
const storage = new Storage([defaultProject]);
saveToLocalStorage(Storage);

newTodoBtn.addEventListener("click", () => {
  const todoForm = createTodoForm();
  todoForm.addEventListener("submit", (event) => {
    const formData = {
      id: generateUniqueID(),
      title: todoForm.titleInput.value,
      description: descriptionInput.value,
      dueDate: dueDateInput.value,
      priority: priorityInput.value,
      notes: notesInput.value, 
      checked: checkedInput.checked,
    }
    submitTodoForm(event, formData, defaultProject, storage);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(todoForm);
});

newProjectBtn.addEventListener("click", () => {
  const projectForm = createProjectForm();
  contentDiv.innerHTML = "";
  contentDiv.append(projectForm);
});
