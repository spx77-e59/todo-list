import createProjectForm from "./createProjectForm";
import submitProjectForm from "./submitProjectForm";
import Storage from "../classes/Storage";
import showProjects from "../display/showProjects";

export default function () {
  const projectForm = createProjectForm();
  projectForm.addEventListener("submit", (event) => {
    submitProjectForm(event, projectForm, Storage);
    projectForm.style.display = "none";
    showProjects();
  });

  return projectForm;
}
