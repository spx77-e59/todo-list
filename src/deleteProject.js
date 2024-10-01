export default function (Storage, Project) {
  const ProjectToDeleteIndex = Storage.Projects.findIndex(
    (project) => project.title === Project.title
  );
  Storage.Projects.splice(ProjectToDeleteIndex, 1);
}
