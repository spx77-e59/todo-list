import Project from "../classes/Project.js";

export default function (formData) {
  const project = new Project(formData.id, formData.title, formData.todos);
  return project;
}
