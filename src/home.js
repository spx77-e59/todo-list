import restaurant from "./img/restaurant.jpg";

export default function () {
  const restaurantImg = document.createElement("img");
  const headLineText = document.createElement("h2");
  const descriptionText = document.createElement("p");
  const callToActionButton = document.createElement("button");
  const contentDiv = document.createElement("div");
  const homeDiv = document.createElement("div");

  restaurantImg.src = restaurant;
  restaurantImg.alt = "restaurant";
  restaurantImg.width = 400;
  headLineText.innerText =
    "Welcome to The Golden Spoon. A Culinary Experience Like No Other";
  descriptionText.innerText = `Nestled in the heart of the city, The Golden Spoon offers a unique blend of flavors that delight the senses and leave you craving more. Our carefully crafted menu, paired with a warm and inviting atmosphere, provides the perfect setting for any occasion. From farm-fresh ingredients to innovative dishes, every meal is a celebration of taste. Join us for a dining experience that goes beyond food—it's a journey into culinary excellence.`;
  callToActionButton.textContent = "Reserve a table";
  callToActionButton.id = "callToActionButton";

  contentDiv.classList.add("home-content");
  contentDiv.append(headLineText, descriptionText, callToActionButton);

  homeDiv.classList.add("home");
  homeDiv.append(restaurantImg, contentDiv);
  return homeDiv;
}
