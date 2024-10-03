export default function (container, priorityValue) {
  if (container.classList.length > 2) {
    container.classList.remove(classList[classList.length - 1]);
  }
  switch (priorityValue) {
    case "Low":
      container.classList.add("lowPriority");
      break;
    case "Medium":
      container.classList.add("mediumPriority");
      break;
    case "High":
      container.classList.add("highPriority");
      break;
    case "Very High":
      container.classList.add("veryHighPriority");
      break;
    case "Urgent":
      container.classList.add("urgentPriority");
      break;
  }
}
