export default function () {
  const data = localStorage.getItem("Storage");
  const storage = JSON.parse(data);
  return storage.Projects;
}
