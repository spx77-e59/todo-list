import retrieveDataFromLocalStorage from "../functions/retrieveDataFromLocalStorage.js";
import newTodoForm from "../forms/newTodoForm.js";
import showTodo from "./showTodo.js";
import Storage from "../classes/Storage.js";
import saveToLocalStorage from "../functions/saveToLocalStorage.js";
import updateProject from "../functions/updateProject.js";
import updateTodoChecked from "../functions/updateTodoChecked.js";
import updateTodoUnchecked from "../functions/updateTodoUnchecked.js";
import setPriorityClassName from "../functions/setPriorityClassName.js";

export default function showProjectsAndList() {
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
      checkedInput.checked = todo.checked; 

      checkedInput.addEventListener("change", () => {
        if (checkedInput.checked) {
          todo.checked = true;
          todoDiv.classList.add("complete");
          updateTodoChecked(project, todo);
        } else {
          todo.checked = false;
          todoDiv.classList.remove("complete");
          updateTodoUnchecked(project, todo);
        }
        updateProject(Storage, project);
        saveToLocalStorage(Storage);
        showProjectsAndList();
      });

      const viewDetailButton = document.createElement("button");
      viewDetailButton.textContent = "View Detail";
      viewDetailButton.addEventListener("click", () => {
        showTodo(project, todo);
      });

      const todoDiv = document.createElement("div");
      todoDiv.classList.add("homeTodoDiv");
      todoDiv.classList.add("helper");

      if (todo.checked) {
        todoDiv.classList.add("complete");
        todoDiv.classList.remove("helper");
      } else {
        todoDiv.classList.add("helper");
        todoDiv.classList.remove("complete");
      }

      const priorityValue = todo.priority;
      setPriorityClassName(todoDiv, priorityValue);

      todoDiv.append(titleText, dueDateText, checkedInput, viewDetailButton);
      todoListDiv.append(todoDiv);
    });
    projectsDiv.append(projectDiv);
  });
  contentDiv.innerHTML = "";
  contentDiv.append(projectsDiv);
}
