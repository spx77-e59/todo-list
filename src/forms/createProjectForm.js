export default function () {
  const projectForm = document.createElement("form");
  projectForm.id = "projectForm";

  const titleInput = document.createElement("input");
  titleInput.id = "projectTitleInput";
  titleInput.type = "text";
  titleInput.placeholder = "Project Title";

  const submitButton = document.createElement("button");
  submitButton.id = "projectSubmitButton";
  submitButton.textContent = "Create";

  projectForm.append(titleInput, submitButton);

  return projectForm;
}
