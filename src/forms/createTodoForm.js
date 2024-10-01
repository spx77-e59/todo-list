export default function () {
  const todoForm = document.createElement("form");
  todoForm.id = "todoForm";

  const titleInput = document.createElement("input");
  titleInput.id = "titleInput";
  titleInput.type = "text";
  titleInput.placeholder = "Title";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "descriptionInput";
  descriptionInput.placeholder = "Description";

  const dueDateInput = document.createElement("input");
  dueDateInput.id = "dueDateInput";
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Due Date";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "dueDateInput";
  dueDateLabel.textContent = "Due date:";

  const dueDateDiv = document.createElement("div");
  dueDateDiv.id = "dueDateDiv";
  dueDateDiv.append(dueDateLabel, dueDateInput);

  const priorityInput = document.createElement("select");
  priorityInput.id = "priorityInput";

  const priorityOptions = [
    { value: 1, text: "Low" },
    { value: 2, text: "Medium" },
    { value: 3, text: "High" },
    { value: 4, text: "Very High" },
    { value: 5, text: "Urgent" },
  ];

  priorityOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    priorityInput.appendChild(optionElement);
  });

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priorityInput";
  priorityLabel.textContent = "Priority:";

  const priorityDiv = document.createElement("div");
  priorityDiv.id = "priorityDiv";
  priorityDiv.append(priorityLabel, priorityInput);

  const notesInput = document.createElement("textarea");
  notesInput.id = "notesInput";
  notesInput.placeholder = "Notes";

  const checkedInput = document.createElement("input");
  checkedInput.id = "checkedInput";
  checkedInput.type = "checkbox";
  checkedInput.checked = false;
  checkedInput.style.display = "none";

  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.textContent = "Add";

  todoForm.append(
    titleInput,
    descriptionInput,
    dueDateDiv,
    priorityDiv,
    notesInput,
    checkedInput,
    submitButton
  );

  return todoForm;
}
