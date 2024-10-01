export default function () {
  const footerDiv = document.createElement("div");
  const contactInfoDiv = document.createElement("div");
  const contactInfoHeading = document.createElement("h2");
  const copyRightText = document.createElement("p");

  contactInfoHeading.textContent = "Contact Us";
  contactInfoDiv.append(contactInfoHeading);

  const contactInfo = [
    {
      name: "Address",
      value: `123 Culinary Avenue,
Foodie Town, FL 54321`,
    },
    { name: "Phone", value: `(123) 456-7890` },
    { name: "email", value: `info@thegoldenspoon.com` },
  ];

  contactInfo.forEach((info) => {
    const value = document.createElement("p");
    value.innerText = info.value;

    contactInfoDiv.append(value);
  });
  contactInfoDiv.classList.add("contact-info");

  copyRightText.textContent = "© 2024 The Golden Spoon. All Rights Reserved.";
  copyRightText.classList.add("copyright");
  footerDiv.append(contactInfoDiv, copyRightText);

  return footerDiv;
}
