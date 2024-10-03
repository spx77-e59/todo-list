import editProjectTitle from "../functions/editProjectTitle.js";
import updateProject from "../functions/updateProject.js";
import Storage from "../classes/Storage.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";
import showProjects from "../display/showProjects";

export default function (project) {
  const titleText = project.title;

  const projectForm = document.createElement("form");
  projectForm.id = "projectForm";

  const titleInput = document.createElement("input");
  titleInput.id = "editProjectTitleInput";
  titleInput.type = "text";
  titleInput.value = titleText;
  titleInput.required = true;

  const submitButton = document.createElement("button");
  submitButton.id = "editProjectSubmitButton";
  submitButton.textContent = "Save";

  projectForm.append(titleInput, submitButton);

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    editProjectTitle(project, titleInput.value);
    updateProject(Storage, project);
    saveToLocalStorage(Storage);
    showProjects();
  });

  projectForm.style.display = "none";

  return projectForm;
}
