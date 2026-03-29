function createMenuCard(item, index, type) {
  return `
    <ul class="list-group" onclick="addToBasket(${index}, '${type}')">
      <li class="list-group-item">
        <div class="list-group-left">
          <h4>${item.name}</h4>
          <p>${item.zutaten || ""}</p>
          <p>${item.preise.toFixed(2)} CHF</p>
        </div>
        <div class="list-group-right">
          <img class="add-food" src="./img/icons/add.png" alt="">
        </div>
      </li>
    </ul>`;
}
/*
function addPizza(index) {
  return `<ul class="list-group" onclick="addToBasket(${index}, 'pizza')">
              <li class="list-group-item">
                <div class="list-group-left">
                  <h4>${pizzas[index].name}</h4>
                  <p>${pizzas[index].zutaten}</p>
                  <p>${pizzas[index].preise.toFixed(2)} CHF</p>
                </div>
                <div class="list-group-right">
                  <img class="add-food" src="./img/icons/add.png" alt="">
                </div>
              </li>
            </ul>`;
}
*/

function addCartItem(index) {
  return `<div class="basket-item">
              <p><b>${cart[index].name}</b></p>
              <p>${cart[index].zutaten}</p>
              <p>${cart[index].quantity} × ${cart[index].preise.toFixed(
    2
  )} CHF = 
              ${(cart[index].preise * cart[index].quantity).toFixed(2)} CHF</p>
              <div class="quantity-controls">
                <button class="minus-plus btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span>${cart[index].quantity}</span>
                <button class="minus-plus btn" onclick="changeQuantity(${index}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromBasket(${index})">
                  <img src="./img/icons/trash.png" alt="" style="width: 2rem;">
                </button>
              </div>
            </div>`;
}

function basketSummaryTemplate(totalPrice, deliveryFee, finalTotal) {
  return `
      <p>Zwischensumme: ${totalPrice.toFixed(2)} CHF</p>
      <p>Lieferkosten: ${deliveryFee.toFixed(2)} CHF</p>
      <p class="delivery-info">
        Lieferkostenhinweis: Bei Bestellungen unter 25.00 CHF wird eine 
        Lieferpauschale von 5.00 CHF verrechnet.
      </p>
      <p><b>Gesamtsumme: ${finalTotal.toFixed(2)} CHF</b></p>
      <button class="order-btn" onclick="placeOrder()">Bestellen</button>
    `;
}
function orderConfirmationTemplate() {
  return `
    <div class="order-confirmation">
      <p>Danke für Ihre Bestellung! 🎉</p>
      <p>Ihr Essen ist unterwegs!</p>
    </div>
  `;
}
