let productsInCart = localStorage.getItem("productsInCart")
let allproducts = document.querySelector(".products")

if (productsInCart) {
  let item = JSON.parse(productsInCart);
  drawCartproduct(item);
}

function drawCartproduct(products) {
  let y = products.map((item) => {
    return `
        <div class="product_item">
        <img class="product_item img" src="${item.imageurl}">
          <div class="product-item_dosc">
            <h2>${item.title}</h2>
            <p>Lorem is prgraphe static in html</p>
            <span>${item.color}</span>
          </div>
          <div class="product-item_action">
        <button class="add_to_cart" onClick="removeFromCart(${item.id})">Remove From Cart</button>
        
          </div>
        </div>
          `
  })
  allproducts.innerHTML = y;
}

function removeFromCart(itemId) {
  let productsInCart = localStorage.getItem("productsInCart");

  if (productsInCart) {
    let cartItems = JSON.parse(productsInCart);
    let itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      drawCartProducts(cartItems);
    }
  }
}


