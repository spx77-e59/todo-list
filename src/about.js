export default function () {
  const storyDiv = document.createElement("div");
  const storyHeading = document.createElement("h2");
  const storyText = document.createElement("p");
  const missionDiv = document.createElement("div");
  const missionHeading = document.createElement("h2");
  const missionText = document.createElement("p");
  const teamDiv = document.createElement("div");
  const teamHeading = document.createElement("h2");
  const aboutDiv = document.createElement("div");

  storyHeading.textContent = "Our Story";
  storyText.textContent = `The Golden Spoon was born from a passion for culinary excellence and a love for bringing people together around the table. Founded in 2024 by chefs Marco and Elena Rossi, the restaurant began as a dream to create a dining experience that celebrates the art of cooking. With backgrounds in fine dining and a commitment to sourcing local ingredients, the Rossi family envisioned a warm and inviting space where every guest feels like family.

Located in the heart of Foodie Town, The Golden Spoon has quickly become a beloved destination for both locals and visitors. Our ambiance blends modern elegance with rustic charm, creating the perfect backdrop for any occasion—whether it's a casual lunch, a romantic dinner, or a lively gathering with friends.`;
  storyDiv.append(storyHeading, storyText);

  missionHeading.textContent = "Our Mission";
  missionText.textContent = `At The Golden Spoon, our mission is simple: to provide an unforgettable dining experience by serving high-quality, flavorful dishes made from the finest ingredients. We believe in the power of food to connect people and create lasting memories. Our commitment to sustainability means we prioritize local farmers and artisans, ensuring that every dish is not only delicious but also environmentally responsible.`;
  missionDiv.append(missionHeading, missionText);

  teamHeading.textContent = "Meet Our Team";
  teamDiv.append(teamHeading);

  const team = [
    {
      name: "Chef Sonam",
      description: `With over 15 years of experience in Michelin-starred kitchens, Chef Marco brings his expertise and creativity to The Golden Spoon. His passion for seasonal ingredients and innovative techniques is evident in every dish.`,
    },
    {
      name: "Chef Phuntsho",
      description: `A culinary school graduate and Marco’s partner in both life and the kitchen, Chef Elena focuses on creating delightful desserts that beautifully complement the menu. Her handmade pastries and confections are a highlight for many diners.`,
    },
    {
      name: "Front of House Manager Tshering",
      description: `With a background in hospitality management, Sarah ensures that every guest receives top-notch service. Her warm personality and attention to detail create a welcoming atmosphere.`,
    },
  ];

  team.forEach((member) => {
    const name = document.createElement("h3");
    const description = document.createElement("p");

    name.textContent = member.name;
    description.textContent = member.description;

    teamDiv.append(name, description);
  });

  teamDiv.classList.add("team");

  aboutDiv.classList.add("about");
  aboutDiv.append(storyDiv, missionDiv, teamDiv);

  return aboutDiv;
}
