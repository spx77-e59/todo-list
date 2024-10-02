import retrieveDataFromLocalStorage from "../functions/retrieveDataFromLocalStorage";
import showProjectsAndList from "./showProjectsAndList";
export default function (Project, Todo) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const projects = retrieveDataFromLocalStorage();

  const todoProject = projects.find((project) => project.id === Project.id);

  const todo = todoProject.todos.find((todo) => todo.id === Todo.id);

  const todoDetailDiv = document.createElement("div");
  todoDetailDiv.classList.add("todoDetailDiv");

  const viewTodoDiv = document.createElement("div");
  viewTodoDiv.classList.add("viewTodoDiv");

  const backToHomeButton = document.createElement("button");
  backToHomeButton.classList.add("backToHomeButton");
  backToHomeButton.textContent = "Back";
  backToHomeButton.addEventListener("click", showProjectsAndList);

  const containerDiv1 = document.createElement("div");
  containerDiv1.classList.add("todoContainerDiv");
  const textHeader1 = document.createElement("h2");
  textHeader1.textContent = "Title";
  const titleText = document.createElement("h3");
  titleText.textContent = todo.title;
  containerDiv1.append(textHeader1, titleText);

  const containerDiv2 = document.createElement("div");
  containerDiv2.classList.add("todoContainerDiv");
  const textHeader2 = document.createElement("h2");
  textHeader2.textContent = "Description";
  const descriptionText = document.createElement("p");
  descriptionText.textContent = todo.description;
  containerDiv2.append(textHeader2, descriptionText);

  const containerDiv3 = document.createElement("div");
  containerDiv3.classList.add("todoContainerDiv");
  const textHeader3 = document.createElement("h2");
  textHeader3.textContent = "Due Date";
  const dueDateText = document.createElement("p");
  dueDateText.textContent = todo.dueDate;
  containerDiv3.append(textHeader3, dueDateText);

  const containerDiv4 = document.createElement("div");
  containerDiv4.classList.add("todoContainerDiv");
  const textHeader4 = document.createElement("h2");
  textHeader4.textContent = "Priority";
  const priorityText = document.createElement("p");
  priorityText.textContent = todo.priority;
  containerDiv4.append(textHeader4, priorityText);

  const containerDiv5 = document.createElement("div");
  containerDiv5.classList.add("todoContainerDiv");
  const textHeader5 = document.createElement("h2");
  textHeader5.textContent = "Notes";
  const notesText = document.createElement("p");
  notesText.textContent = todo.notes;
  containerDiv5.append(textHeader5, notesText);

  const checkedDiv = document.createElement("div");
  todo.checked
    ? checkedDiv.classList.add("checked")
    : checkedDiv.classList.add("unchecked");

  const containerDiv6 = document.createElement("div");
  containerDiv6.classList.add("todoButtonContainerDiv");

  const editTodoButton = document.createElement("button");
  editTodoButton.classList.add("editTodoButton");
  editTodoButton.textContent = "Edit";
  editTodoButton.addEventListener("click", () => {});

  const deleteTodoButton = document.createElement("button");
  deleteTodoButton.classList.add("deleteTodoButton");
  deleteTodoButton.textContent = "Delete";
  deleteTodoButton.addEventListener("click", () => {});

  containerDiv6.append(editTodoButton, deleteTodoButton);

  viewTodoDiv.append(
    containerDiv1,
    containerDiv2,
    containerDiv3,
    containerDiv4,
    containerDiv5,
    checkedDiv,
    containerDiv6
  );

  todoDetailDiv.append(backToHomeButton, viewTodoDiv);
  contentDiv.append(todoDetailDiv);
}
