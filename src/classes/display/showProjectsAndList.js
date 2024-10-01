import retrieveDataFromLocalStorage from "../../functions/retrieveDataFromLocalStorage";

export default function () {
  const projectsDiv = document.createElement("div");
  projectsDiv.id = "projectsDiv";
  const projects = retrieveDataFromLocalStorage();

  projects.forEach((project) => {
    const projectTitleText = document.createElement("h1");
    projectTitleText.textContent = project.title;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.append(projectTitleText);

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

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todoDiv");
      todoDiv.append(
        titleText,
        dueDateText,
        checkedInput,
        viewDetailButton,
        deleteButton
      );
      projectDiv.append(todoDiv);
    });
    projectsDiv.append(projectDiv);
  });

  return projectsDiv;
}
