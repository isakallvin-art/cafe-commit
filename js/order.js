const orderList = document.querySelector("#order-list");
const orderTotal = document.querySelector("#order-total");
const orderCount = document.querySelector("#order-count");
const placeOrderButton = document.querySelector("#place-order");
const orderMessage = document.querySelector("#order-message");

// Allt som ligger i beställningen just nu
let order = [];

function addToOrder(item) {
  order.push(item);
  orderCount.textContent = order.length;
  renderOrder();
}

function removeFromOrder(index) {
  order.splice(index, 1);
  orderCount.textContent = order.length;
  renderOrder();
}

// Ritar upp beställningen och räknar ut totalen
function renderOrder() {
  orderList.innerHTML = "";
  let total = 0;

  order.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("order-row");

    const text = document.createElement("span");
    text.textContent = item.name + " – " + item.price + " kr";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Ta bort";
    removeButton.addEventListener("click", () => {
      removeFromOrder(index);
    });

    li.append(text, removeButton);
    orderList.append(li);

    total = total + item.price;
  });

  const emptyOrder = document.createElement("p");

    if (total === 0) {
      emptyOrder.textContent = "Din beställning är tom – lägg till något gott från menyn!";
    };
  
  orderList.append(emptyOrder);

  orderTotal.textContent = "Totalt: " + total + " kr";
}
function getOrderTotal() {
  return order.reduce((sum, item) => sum + item.price, 0);
}
placeOrderButton.addEventListener("click", () => {
  if (order.length ===0) {
    orderMessage.textContent = "Din beställning är tom";
    return;
  }
  const vald = document.querySelector('input[name="serving"]:checked');
  const serving = vald ? vald.value : "Äta här";
  const total = getOrderTotal();

  orderMessage.textContent = `Tack! Din beställning (${serving}) på ${total} kr är mottagen.`;
  order.length = 0;
  renderOrder();
});
