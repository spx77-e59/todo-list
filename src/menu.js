export default function () {
  const appetizersDiv = document.createElement("div");
  const appetizersHeading = document.createElement("h2");
  const saladsDiv = document.createElement("div");
  const saladsHeading = document.createElement("h2");
  const mainCoursesDiv = document.createElement("div");
  const mainCoursesHeading = document.createElement("h2");
  const dessertsDiv = document.createElement("div");
  const dessertsHeading = document.createElement("h2");
  const beveragesDiv = document.createElement("div");
  const beveragesHeading = document.createElement("h2");
  const menuDiv = document.createElement("div");

  appetizersHeading.textContent = "Appetizers";
  appetizersDiv.append(appetizersHeading);

  saladsHeading.textContent = "Salads";
  saladsDiv.append(saladsHeading);

  mainCoursesHeading.textContent = "Main Courses";
  mainCoursesDiv.append(mainCoursesHeading);

  dessertsHeading.textContent = "Desserts";
  dessertsDiv.append(dessertsHeading);

  beveragesHeading.textContent = "Beverages";
  beveragesDiv.append(beveragesHeading);

  const appetizers = [
    {
      name: "Truffle Mushroom Arancini",
      description:
        "Crispy risotto balls filled with truffle-infused mushrooms and mozzarella, served with a tangy marinara sauce.",
      price: 12,
    },
    {
      name: "Caprese Skewers",
      description:
        "Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic reduction.",
      price: 10,
    },
    {
      name: "Spicy Tuna Tartare",
      description:
        "Diced sushi-grade tuna mixed with avocado and spicy mayo, served with crispy wonton chips.",
      price: 15,
    },
    {
      name: "Stuffed Bell Peppers",
      description:
        "Mini bell peppers stuffed with herbed cream cheese and wrapped in prosciutto, served with a spicy aioli.",
      price: 11,
    },
  ];

  const salads = [
    {
      name: "Golden Harvest Salad",
      description:
        "Mixed greens, roasted butternut squash, candied pecans, and goat cheese, topped with maple vinaigrette.",
      price: 14,
    },
    {
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce, homemade croutons, shaved parmesan, and Caesar dressing.",
      price: 12,
      addons: {
        "Grilled Chicken": 4,
      },
    },
    {
      name: "Mediterranean Quinoa Salad",
      description:
        "Quinoa, cucumbers, cherry tomatoes, olives, and feta cheese, tossed in lemon-oregano vinaigrette.",
      price: 13,
    },
  ];

  const mainCourses = [
    {
      name: "Herb-Crusted Salmon",
      description:
        "Pan-seared salmon fillet topped with an herb crust, served with garlic mashed potatoes and seasonal vegetables.",
      price: 25,
    },
    {
      name: "Filet Mignon",
      description:
        "Tender filet mignon cooked to perfection, served with red wine reduction, roasted asparagus, and truffle fries.",
      price: 36,
    },
    {
      name: "Wild Mushroom Risotto",
      description:
        "Creamy Arborio rice cooked with wild mushrooms, finished with parmesan and fresh herbs.",
      price: 20,
    },
    {
      name: "Chicken Piccata",
      description:
        "Sautéed chicken breast in a lemon-caper sauce, served with linguine and steamed broccoli.",
      price: 22,
    },
  ];

  const desserts = [
    {
      name: "Chocolate Fondant",
      description:
        "A warm chocolate cake with a gooey center, served with vanilla ice cream and fresh berries.",
      price: 10,
    },
    {
      name: "Classic Tiramisu",
      description:
        "Layers of coffee-soaked ladyfingers and rich mascarpone cream, dusted with cocoa powder.",
      price: 9,
    },
    {
      name: "Lemon Sorbet",
      description:
        "A refreshing lemon sorbet served in a lemon shell, perfect for cleansing the palate.",
      price: 7,
    },
    {
      name: "Pistachio Baklava",
      description:
        "Layers of flaky pastry filled with pistachios and honey, served with a side of whipped cream.",
      price: 8,
    },
  ];

  const beverages = [
    {
      name: "House-Made Lemonade",
      price: 5,
    },
    {
      name: "Iced Tea (Sweetened or Unsweetened)",
      price: 4,
    },
    {
      name: "Coffee (Regular or Decaf)",
      price: 3,
    },
    {
      name: "House Wine (Glass)",
      price: 8,
    },
    {
      name: "House Wine (Bottle)",
      price: 30,
    },
    {
      name: "Craft Beer",
      price: 6,
    },
  ];

  appetizers.forEach((appetizer) => {
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = appetizer.name;
    description.textContent = appetizer.description;
    price.textContent = "$" + appetizer.price;

    div.classList.add("item");
    div.append(name, description, price);
    appetizersDiv.append(div);
  });

  salads.forEach((salad) => {
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = salad.name;
    description.textContent = salad.description;
    price.textContent = "$" + salad.price;

    div.classList.add("item");
    div.append(name, description, price);
    saladsDiv.append(div);
  });

  mainCourses.forEach((mainCourse) => {
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = mainCourse.name;
    description.textContent = mainCourse.description;
    price.textContent = "$" + mainCourse.price;

    div.classList.add("item");
    div.append(name, description, price);
    mainCoursesDiv.append(div);
  });

  desserts.forEach((dessert) => {
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = dessert.name;
    description.textContent = dessert.description;
    price.textContent = "$" + dessert.price;

    div.classList.add("item");
    div.append(name, description, price);
    dessertsDiv.append(div);
  });

  beverages.forEach((beverage) => {
    const name = document.createElement("h3");
    const price = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = beverage.name;
    price.textContent = "$" + beverage.price;

    div.classList.add("item");
    div.append(name, price);
    beveragesDiv.append(div);
  });

  menuDiv.append(
    appetizersDiv,
    saladsDiv,
    mainCoursesDiv,
    dessertsDiv,
    beveragesDiv
  );
  menuDiv.classList.add("menu");
  return menuDiv;
}
