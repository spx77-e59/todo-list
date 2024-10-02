import retrieveDataFromLocalStorage from "../functions/retrieveDataFromLocalStorage";
import newProjectForm from "../forms/newProjectForm.js";
import deleteProject from "../functions/deleteProject.js";
import Storage from "../classes/Storage.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";

export default function showProjects() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projectsDiv";

  const projectForm = newProjectForm();

  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("newProjectButton");
  newProjectButton.textContent = "New Project";

  newProjectButton.addEventListener("click", () => {
    projectForm.style.display = "";
    projectsDiv.insertBefore(projectForm, projectListDiv);
    newProjectButton.style.display = "none";
    closeProjectFormButton.style.display = "";
  });

  const closeProjectFormButton = document.createElement("button");
  closeProjectFormButton.classList.add("closeProjectFormButton");
  closeProjectFormButton.textContent = "X";
  closeProjectFormButton.style.display = "none";

  closeProjectFormButton.addEventListener("click", () => {
    projectForm.style.display = "none";
    newProjectButton.style.display = "";
    closeProjectFormButton.style.display = "none";
  });

  const projects = retrieveDataFromLocalStorage();

  const projectListDiv = document.createElement("div");
  projectListDiv.id = "projectListDiv";

  projectsDiv.append(closeProjectFormButton, newProjectButton, projectListDiv);

  projects.forEach((project) => {
    const projectTitleText = document.createElement("h1");
    projectTitleText.textContent = project.title;

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProjectButton");
    deleteProjectButton.textContent = "Delete";
    deleteProjectButton.addEventListener("click", () => {
      deleteProject(Storage, project);
      saveToLocalStorage(Storage);
      showProjects();
    });

    const editTitleProjectButton = document.createElement("button");
    editTitleProjectButton.classList.add("editProjectTitleButton");
    editTitleProjectButton.textContent = "Edit Title";

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.append(
      projectTitleText,
      editTitleProjectButton,
      deleteProjectButton
    );

    project.title !== "" && projectListDiv.append(projectDiv);
  });
  contentDiv.append(projectsDiv);
}
