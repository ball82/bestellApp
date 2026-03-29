let firstItemAdded = false;
let additionalItems = 0;
let basketModal = null;

function init() {
  renderMenu(pizzas, "pizzaCards", "pizza");
  renderMenu(pastas, "pastaCards", "pasta");
  renderMenu(desserts, "dessertCards", "dessert");
  renderMenu(drinks, "drinkCards", "drink");
  updateBasket();
  updateSmBasket();
  updateBasketCount();
  basketModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
}

function renderMenu(items, containerId, type) {
  let container = document.getElementById(containerId);
  container.innerHTML = "";
  for (let indexMenu = 0; indexMenu < items.length; indexMenu++) {
    container.innerHTML += createMenuCard(items[indexMenu], indexMenu, type);
  }
}
/*
function loadPizzas() {
  const pizzaContainer = document.getElementById("pizzaCards");
  pizzaContainer.innerHTML = pizzas.map((_, i) => addPizza(i)).join("");
}
*/

function addToBasket(index, category) {
  const product = {
    pizza: pizzas,
    pasta: pastas,
    dessert: desserts,
    drink: drinks,
  }[category][index];
  const item = cart.find((i) => i.name === product.name);

  item ? item.quantity++ : cart.push({ ...product, quantity: 1 });

  if (!firstItemAdded && window.innerWidth <= 768) {
    basketModal.show();
    firstItemAdded = true;
  } else if (firstItemAdded) additionalItems++;

  if (firstItemAdded) updateItemNotification();
  updateAllBasketDisplays();
}

function updateAllBasketDisplays() {
  updateBasketCount();
  updateBasket();
  updateSmBasket();
}

function updateBasketCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("basketCount").textContent =
    count > 0 ? `Warenkorb (${count})` : "Warenkorb";
}

function updateBasket() {
  let basketContainer = document.getElementById("orderContent");
  basketContainer.innerHTML = "";
  for (let indexBasket = 0; indexBasket < cart.length; indexBasket++) {
    basketContainer.innerHTML += addCartItem(indexBasket);
  }
  updateBasketSummary("basketSummary");
}

function updateSmBasket() {
  let smBasketContainer = document.getElementById("smOrderContent");
  smBasketContainer.innerHTML = "";
  for (let indexSmBasket = 0; indexSmBasket < cart.length; indexSmBasket++) {
    smBasketContainer.innerHTML += addCartItem(indexSmBasket);
  }
  updateBasketSummary("smBasketSummary");
}

function updateBasketSummary(elementId) {
  const totals = calculateTotalPrice();
  document.getElementById(elementId).innerHTML = basketSummaryTemplate(
    totals.totalPrice,
    totals.deliveryFee,
    totals.finalTotal
  );
}

function calculateTotalPrice() {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.preise * item.quantity,
    0
  );
  const deliveryFee = totalPrice > 25 ? 0 : 5;
  return { totalPrice, deliveryFee, finalTotal: totalPrice + deliveryFee };
}

function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  updateAllBasketDisplays();
}

function removeFromBasket(index) {
  cart.splice(index, 1);
  updateAllBasketDisplays();
}

function placeOrder() {
  document.getElementById("orderContent").innerHTML =
    orderConfirmationTemplate();
  document.getElementById("smOrderContent").innerHTML =
    orderConfirmationTemplate();

  document.getElementById("basketSummary").innerHTML = "";
  document.getElementById("smBasketSummary").innerHTML = "";

  cart = [];

  updateBasketCount();

  firstItemAdded = false;
  additionalItems = 0;
  resetNotification();
}

function openBasketModal() {
  if (window.innerWidth <= 768 && cart.length > 0) {
    basketModal.show();
  }
}

function updateItemNotification() {
  const notif =
    document.getElementById("itemNotification") || createNotification();
  notif.textContent = `+${additionalItems}`;
  notif.style.display = "block";
}

function createNotification() {
  const notif = document.createElement("div");
  notif.id = "itemNotification";
  notif.className = "item-notification";
  document.querySelector(".basket-btn").appendChild(notif);
  return notif;
}

function resetNotification() {
  const notif = document.getElementById("itemNotification");
  if (notif) {
    additionalItems = 0;
    notif.style.display = "none";
  }
}
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "placeOrderButton") {
    placeOrder();
  }
});
