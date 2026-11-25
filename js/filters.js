// Här ska filtreringen och sorteringen in.
// getVisibleItems() bestämmer VILKA rätter som visas – och i vilken ORDNING.
function getVisibleItems() {
  // En kopia av menyn, så att originalet aldrig ändras
  let items = [...menu];
  if (categoryFilter.value !== "alla") {
    items = items.filter((item) => item.category === categoryFilter.value);
  }
  return items;
}

// Anropa updateMenu() varje gång ett filter ändras
function updateMenu() {
  const items = getVisibleItems();
  renderMenu(items);
}

categoryFilter.addEventListener("change", updateMenu);