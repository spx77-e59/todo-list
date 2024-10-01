export default function () {
  const projectForm = document.createElement("form");
  projectForm.id = "projectForm";

  const titleInput = document.createElement("input");
  titleInput.id = "projectTitleInput";
  titleInput.type = "text";
  titleInput.placeholder = "Project Title";

  projectForm.append(titleInput);

  return projectForm;
}
