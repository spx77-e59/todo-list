import "./styles.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import footer from "./footer.js";

const contentDiv = document.querySelector("#content");
const navElement = document.querySelector("nav");
const footerElement = document.querySelector("footer");

const homeDiv = home();
const menuDiv = menu();
const aboutDiv = about();
const footerDiv = footer();

contentDiv.append(homeDiv);
footerElement.append(footerDiv);

function displayContent(sectionName) {
  contentDiv.innerHTML = "";
  switch (sectionName) {
    case "Home":
      contentDiv.append(homeDiv);
      break;
    case "Menu":
      contentDiv.append(menuDiv);
      break;
    case "About":
      contentDiv.append(aboutDiv);
      break;
  }
}

const homeButton = navElement.querySelector("button");
homeButton.classList.add("active-state");


navElement.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "BUTTON") {
    displayContent(target.innerText);
    const buttons = navElement.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active-state");
    });
    target.classList.add("active-state");
  }
});
