import createTodoForm from "./createTodoForm";
import submitTodoForm from "./submitTodoForm";
import Storage from "../classes/Storage";
import showProjectsAndList from "../display/showProjectsAndList";

export default function (project) {
  const todoForm = createTodoForm();
  todoForm.addEventListener("submit", (event) => {
    submitTodoForm(event, todoForm, project, Storage);
    todoForm.style.display = "none";
    showProjectsAndList();
  });
  return todoForm;
}
