import retrieveDataFromLocalStorage from "../functions/retrieveDataFromLocalStorage";
import newProjectForm from "../forms/newProjectForm.js";
import deleteProject from "../functions/deleteProject.js";
import editProjectTitleForm from "../forms/editProjectTitleForm.js";
import Storage from "../classes/Storage.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";

export default function showProjects() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  let projectList = retrieveProjects();

  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projectsDiv";

  const helperDiv = document.createElement("div");

  const projectForm = newProjectForm();
  projectsDiv.append(helperDiv, projectList);

  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("newProjectButton");
  newProjectButton.textContent = "New Project";

  newProjectButton.addEventListener("click", () => {
    projectForm.style.display = "";
    projectsDiv.insertBefore(projectForm, helperDiv);
    newProjectButton.style.display = "none";
    closeProjectFormButton.style.display = "";
    projectList.remove();
    projectList = retrieveProjects();
    projectsDiv.append(projectList);
  });

  const closeProjectFormButton = document.createElement("button");
  closeProjectFormButton.classList.add("closeProjectFormButton");
  closeProjectFormButton.textContent = "X";
  closeProjectFormButton.style.display = "none";

  closeProjectFormButton.addEventListener("click", () => {
    projectForm.style.display = "none";
    newProjectButton.style.display = "";
    closeProjectFormButton.style.display = "none";
    projectList.remove();
    projectList = retrieveProjects();
    projectsDiv.append(projectList);
  });

  projectsDiv.prepend(closeProjectFormButton, newProjectButton);

  contentDiv.append(projectsDiv);
}

function retrieveProjects() {
  const projects = retrieveDataFromLocalStorage();

  const projectListDiv = document.createElement("div");
  projectListDiv.id = "projectListDiv";

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

    const titleForm = editProjectTitleForm(project);

    const cancelEditTitleButton = document.createElement("button");
    cancelEditTitleButton.classList.add("cancelEditTitleButton");
    cancelEditTitleButton.textContent = "X";
    cancelEditTitleButton.style.display = "none";
    cancelEditTitleButton.addEventListener("click", () => {
      cancelEditTitleButton.style.display = "none";
      editTitleProjectButton.style.display = "";
      titleForm.style.display = "none";
      editTitleProjectButton.style.display = "";
      projectTitleText.style.display = "";
    });

    const editTitleProjectButton = document.createElement("button");
    editTitleProjectButton.classList.add("editProjectTitleButton");
    editTitleProjectButton.textContent = "Edit Title";
    editTitleProjectButton.addEventListener("click", () => {
      projectTitleText.style.display = "none";
      projectDiv.prepend(titleForm);
      titleForm.style.display = "";
      cancelEditTitleButton.style.display = "";
      editTitleProjectButton.style.display = "none";
    });

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.append(
      projectTitleText,
      cancelEditTitleButton,
      editTitleProjectButton,
      deleteProjectButton
    );

    project.title !== "" && projectListDiv.append(projectDiv);
  });

  return projectListDiv;
}

