import "./styles.css";
import Storage from "./classes/Storage.js";
import Project from "./classes/Project.js";
import saveToLocalStorage from "./functions/saveToLocalStorage.js";
import generateUniqueID from "./functions/generateUniqueID.js";
import showProjectsAndList from "./display/showProjectsAndList.js";
import showProjects from "./display/showProjects.js";

const homeBtn = document.querySelector("#home-btn");
const projectsBtn = document.querySelector("#projects-btn");
const navElement = document.querySelector("nav");
const defaultProject = new Project(generateUniqueID(), "", []);

Storage.Projects.push(defaultProject);
saveToLocalStorage(Storage);

showProjectsAndList();

homeBtn.addEventListener("click", () => {
  showProjectsAndList();
});

projectsBtn.addEventListener("click", () => {
  showProjects();
});

homeBtn.classList.add("activeState");
navElement.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "BUTTON") {
    const buttons = navElement.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("activeState");
    });
    target.classList.add("activeState");
  }
});
