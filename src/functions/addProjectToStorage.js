export default function (Storage, Project) {
  Storage.Projects.splice(1, 0, Project);
}
