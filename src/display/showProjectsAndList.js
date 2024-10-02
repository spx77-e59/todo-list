import retrieveDataFromLocalStorage from "../functions/retrieveDataFromLocalStorage";
import newTodoForm from "../forms/newTodoForm";

export default function () {
  const contentDiv = document.querySelector("#content");
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "homeProjectsDiv";
  const projects = retrieveDataFromLocalStorage();

  projects.forEach((project) => {
    const projectTitleText = document.createElement("h1");
    projectTitleText.textContent = project.title;

    const todoForm = newTodoForm(project);
    todoForm.style.display = "none";

    const newTodoButton = document.createElement("button");
    newTodoButton.classList.add("newTodoButton");
    newTodoButton.textContent = "New Todo";

    newTodoButton.addEventListener("click", () => {
      todoForm.style.display = "";
      projectDiv.insertBefore(todoForm, todoListDiv);
      newTodoButton.style.display = "none";
      closeTodoFormButton.style.display = "";
    });

    const closeTodoFormButton = document.createElement("button");
    closeTodoFormButton.classList.add("closeTodoFormButton");
    closeTodoFormButton.textContent = "X";
    closeTodoFormButton.style.display = "none";

    closeTodoFormButton.addEventListener("click", () => {
      todoForm.style.display = "none";
      newTodoButton.style.display = "";
      closeTodoFormButton.style.display = "none";
    });

    const projectHeaderDiv = document.createElement("div");
    projectHeaderDiv.classList.add("homeProjectHeaderDiv");
    projectHeaderDiv.append(
      projectTitleText,
      closeTodoFormButton,
      newTodoButton
    );

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("homeProjectDiv");
    projectDiv.append(projectHeaderDiv);

    const todoListDiv = document.createElement("div");
    todoListDiv.classList.add("homeTodoListDiv");
    projectDiv.append(todoListDiv);

    project.todos.forEach((todo) => {
      const titleText = document.createElement("h2");
      titleText.textContent = todo.title;

      const dueDateText = document.createElement("p");
      dueDateText.textContent = todo.dueDate;

      const checkedInput = document.createElement("input");
      checkedInput.type = "checkbox";
      checkedInput.checked = false;

      const viewDetailButton = document.createElement("button");
      viewDetailButton.textContent = "View Detail";

      const todoDiv = document.createElement("div");
      todoDiv.classList.add("homeTodoDiv");
      todoDiv.append(titleText, dueDateText, checkedInput, viewDetailButton);
      todoListDiv.append(todoDiv);
    });
    projectsDiv.append(projectDiv);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(projectsDiv);
}
