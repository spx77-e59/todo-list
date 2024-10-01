export default function (Storage) {
  const data = JSON.stringify(Storage);
  localStorage.setItem("Storage", data);
}
