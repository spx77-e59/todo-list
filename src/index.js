import "./styles.css";
import createTodoForm from "./forms/createTodoForm.js";
import createProjectForm from "./forms/createProjectForm.js";
import Storage from "./classes/Storage.js";
import Project from "./classes/Project.js";
import saveToLocalStorage from "./functions/saveToLocalStorage.js";
import submitTodoForm from "./forms/submitTodoForm.js";
import submitProjectForm from "./forms/submitProjectForm.js";
import generateUniqueID from "./functions/generateUniqueID.js";
import showProjectsAndList from "./classes/display/showProjectsAndList.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const newTodoBtn = document.querySelector("#new-todo-btn");
const newProjectBtn = document.querySelector("#new-project-btn");
const projectsBtn = document.querySelector("#projects-btn");

const defaultProject = new Project(generateUniqueID(), "default project", []);

const storage = new Storage([defaultProject]);
saveToLocalStorage(storage);

contentDiv.append(showProjectsAndList());

newTodoBtn.addEventListener("click", () => {
  const todoForm = createTodoForm();
  todoForm.addEventListener("submit", (event) => {
    submitTodoForm(event, todoForm, defaultProject, storage);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(todoForm);
});

newProjectBtn.addEventListener("click", () => {
  const projectForm = createProjectForm();
  projectForm.addEventListener("submit", (event) => {
    submitProjectForm(event, projectForm, storage);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(projectForm);
});

homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.append(showProjectsAndList());
});
