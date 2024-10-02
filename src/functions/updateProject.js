export default function (Storage, Project) {
  const projectToUpdateIndex = Storage.Projects.findIndex(
    (project) => project.title === Project.title
  );
  Storage.Projects.splice(projectToUpdateIndex, 1, Project);
}
