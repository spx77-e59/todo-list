import "./styles.css";
import createTodoForm from "./forms/createTodoForm.js";
import createProjectForm from "./forms/createProjectForm.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const newTodoBtn = document.querySelector("#new-todo-btn");
const newProjectBtn = document.querySelector("#new-project-btn");
const projectsBtn = document.querySelector("#projects-btn");

newTodoBtn.addEventListener("click", () => {
  const todoForm = createTodoForm();
  contentDiv.innerHTML = "";
  contentDiv.append(todoForm);
});

newProjectBtn.addEventListener("click", () => {
  const projectForm = createProjectForm();
  contentDiv.innerHTML = "";
  contentDiv.append(projectForm);
});
