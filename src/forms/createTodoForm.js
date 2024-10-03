export default function () {
  const todoForm = document.createElement("form");
  todoForm.id = "todoForm";

  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.type = "text";
  titleInput.required = true;

  const titleLabel = document.createElement("label");
  titleLabel.for = "titleInput";
  titleLabel.textContent = "Title";

  const editTodoDiv1 = document.createElement("div");
  editTodoDiv1.classList.add("createTodoDiv");
  editTodoDiv1.append(titleLabel, titleInput);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "descriptionInput";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "descriptionInput";
  descriptionLabel.textContent = "Description";

  const editTodoDiv2 = document.createElement("div");
  editTodoDiv2.classList.add("createTodoDiv");
  editTodoDiv2.append(descriptionLabel, descriptionInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.id = "dueDateInput";
  dueDateInput.type = "date";
  
  const today = new Date();
  const minDate = today.toISOString().substring(0, 10);
  dueDateInput.setAttribute("min", minDate);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "dueDateInput";
  dueDateLabel.textContent = "Due date";

  const editTodoDiv3 = document.createElement("div");
  editTodoDiv3.classList.add("createTodoDiv");
  editTodoDiv3.append(dueDateLabel, dueDateInput);

  const priorityInput = document.createElement("select");
  priorityInput.id = "priorityInput";

  const priorityOptions = [
    { value: "Low", text: "Low" },
    { value: "Medium", text: "Medium" },
    { value: "High", text: "High" },
    { value: "Very High", text: "Very High" },
    { value: "Urgent", text: "Urgent" },
  ];

  priorityOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    priorityInput.appendChild(optionElement);
  });

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priorityInput";
  priorityLabel.textContent = "Priority";

  const editTodoDiv4 = document.createElement("div");
  editTodoDiv4.classList.add("createTodoDiv");
  editTodoDiv4.append(priorityLabel, priorityInput);

  const notesInput = document.createElement("textarea");
  notesInput.id = "notesInput";

  const notesLabel = document.createElement("label");
  notesLabel.for = "notesInput";
  notesLabel.textContent = "Notes";

  const editTodoDiv5 = document.createElement("div");
  editTodoDiv5.classList.add("createTodoDiv");
  editTodoDiv5.append(notesLabel, notesInput);

  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.textContent = "Add";

  const editTodoDiv = document.createElement("div");
  editTodoDiv.classList.add("createTodoContainerDiv");
  editTodoDiv.append(
    editTodoDiv1,
    editTodoDiv2,
    editTodoDiv3,
    editTodoDiv4,
    editTodoDiv5
  );

  todoForm.append(editTodoDiv, submitButton);

  return todoForm;
}
