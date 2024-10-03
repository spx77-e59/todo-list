import editTodo from "../functions/editTodo.js";
import updateTodo from "../functions/updateTodo.js";
import updateProject from "../functions/updateProject.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";
import Storage from "../classes/Storage";
import showTodo from "../display/showTodo";

export default function (project, todo) {
  const todoForm = document.createElement("form");
  todoForm.id = "editTodoForm";

  const titleInput = document.createElement("input");
  titleInput.id = "editTitleInput";
  titleInput.type = "text";
  titleInput.value = todo.title;
  titleInput.required = true;

  const titleLabel = document.createElement("label");
  titleLabel.for = "editTitleInput";
  titleLabel.textContent = "Title";

  const editTodoDiv1 = document.createElement("div");
  editTodoDiv1.classList.add("editTodoDiv");
  editTodoDiv1.append(titleLabel, titleInput);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "editDescriptionInput";
  descriptionInput.value = todo.description;

  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "editDescriptionInput";
  descriptionLabel.textContent = "Description:";

  const editTodoDiv2 = document.createElement("div");
  editTodoDiv2.classList.add("editTodoDiv");
  editTodoDiv2.append(descriptionLabel, descriptionInput);

  const dueDateInput = document.createElement("input");
  dueDateInput.id = "editDueDateInput";
  dueDateInput.type = "date";
  dueDateInput.value = todo.dueDate;
  
  const today = new Date();
  const minDate = today.toISOString().substring(0, 10);
  dueDateInput.setAttribute("min", minDate);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "editDueDateInput";
  dueDateLabel.textContent = "Due date:";

  const editTodoDiv3 = document.createElement("div");
  editTodoDiv3.classList.add("editTodoDiv");
  editTodoDiv3.append(dueDateLabel, dueDateInput);

  const priorityInput = document.createElement("select");
  priorityInput.id = "editPriorityInput";

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
    optionElement.style.backgroundColor = "#f0eaac";
    optionElement.textContent = option.text;
    priorityInput.appendChild(optionElement);
  });

  priorityInput.value = todo.priority;

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "editPriorityInput";
  priorityLabel.textContent = "Priority:";

  const editTodoDiv4 = document.createElement("div");
  editTodoDiv4.classList.add("editTodoDiv");
  editTodoDiv4.append(priorityLabel, priorityInput);

  const notesInput = document.createElement("textarea");
  notesInput.id = "editNotesInput";
  notesInput.value = todo.notes;

  const notesLabel = document.createElement("label");
  notesLabel.for = "editNotesInput";
  notesLabel.textContent = "Notes:";

  const editTodoDiv5 = document.createElement("div");
  editTodoDiv5.classList.add("editTodoDiv");
  editTodoDiv5.append(notesLabel, notesInput);

  const submitButton = document.createElement("button");
  submitButton.id = "editSubmitButton";
  submitButton.textContent = "Update";

  const editTodoDiv = document.createElement("div");
  editTodoDiv.classList.add("editTodoContainerDiv");
  editTodoDiv.append(
    editTodoDiv1,
    editTodoDiv2,
    editTodoDiv3,
    editTodoDiv4,
    editTodoDiv5
  );

  todoForm.append(editTodoDiv, submitButton);

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      title: titleInput.value,
      description: descriptionInput.value,
      dueDate: dueDateInput.value,
      priority: priorityInput.value,
      notes: notesInput.value,
      checked: todo.checked,
    };
    editTodo(todo, formData);
    updateTodo(project, todo);
    updateProject(Storage, project);
    saveToLocalStorage(Storage);
    showTodo(project, todo);
  });

  todoForm.style.display = "none";
  return todoForm;
}
