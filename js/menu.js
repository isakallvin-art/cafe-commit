const menuList = document.querySelector("#menu-list");
const categoryFilter = document.querySelector("#category-filter");

// Skapar ett kort (ett li-element) för en rätt
function createMenuCard(item) {
  const li = document.createElement("li");
  li.classList.add("menu-card");

  const category = document.createElement("p");
  category.classList.add("menu-category");
  category.textContent = item.category;

  const name = document.createElement("h3");
  name.classList.add("menu-name");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.classList.add("menu-price");
  price.textContent = item.price + " kr";

  const rating = document.createElement("p");
  rating.classList.add("menu-rating");
  rating.textContent = "Betyg: " + item.rating;

  li.append(category, name, price, rating);

  if (item.vegetarian = true) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "badge-veg");
    badge.textContent = "Vegetarisk";
    li.append(badge);
  }

  const button = document.createElement("button");
  button.classList.add("button", "button-small");
  button.textContent = "Lägg till";
  button.addEventListener("click", () => {
    addToOrder(item);
  });
  li.append(button);

  return li;
}

// Ritar upp alla rätter som finns i arrayen items
function renderMenu(items) {
  menuList.innerHTML = "";

  items.forEach((item) => {
    const card = createMenuCard(item);
    menuList.append(card);
  });
}

function populateCategories() {

  // Skapar en tom array för unika kategorier
  const categories = [];

  // Går igenom alla produkter i menyn
  menu.forEach((item) => {

    // Kontrollerar om kategorin inte redan finns
    if (!categories.includes(item.category)) {

      // Lägger till kategorin i arrayen
      categories.push(item.category);
    }
  });

  // Går igenom alla unika kategorier
  categories.forEach((category) => {

    // Skapar ett alternativ i dropdownen
    const option = document.createElement("option");

    // Tilldelar alternativet ett värde
    option.value = category;

    // Bestämmer vilken text som visas
    option.textContent = category;

    // Lägger till alternativet i dropdownen
    categoryFilter.append(option);
  });
}
