import "./styles.css";
import createProjectForm from "./forms/createProjectForm.js";
import Storage from "./classes/Storage.js";
import Project from "./classes/Project.js";
import saveToLocalStorage from "./functions/saveToLocalStorage.js";
import submitProjectForm from "./forms/submitProjectForm.js";
import generateUniqueID from "./functions/generateUniqueID.js";
import showProjectsAndList from "./classes/display/showProjectsAndList.js";

const contentDiv = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const newProjectBtn = document.querySelector("#new-project-btn");
const projectsBtn = document.querySelector("#projects-btn");

const defaultProject = new Project(generateUniqueID(), "default project", []);

Storage.Projects.push(defaultProject);
saveToLocalStorage(Storage);

showProjectsAndList();

newProjectBtn.addEventListener("click", () => {
  const projectForm = createProjectForm();
  projectForm.addEventListener("submit", (event) => {
    submitProjectForm(event, projectForm, Storage);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(projectForm);
});

homeBtn.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  showProjectsAndList();
});
