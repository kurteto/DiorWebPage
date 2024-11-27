// Variables globales
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Función para renderizar los productos en el carrito
function renderCart() {
  const cartContainer = document.getElementById("cartContainer");
  const totalAmount = document.getElementById("totalAmount");

  cartContainer.innerHTML = ""; // Limpia el contenedor
  let total = 0;

  // Renderiza cada producto
  cartItems.forEach((item, index) => {
    total += item.price; // Suma el precio del producto

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Precio: $${item.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart(${index})">Eliminar</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  // Actualiza el total
  totalAmount.innerText = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  cartItems.splice(index, 1); // Elimina el producto
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Actualiza el almacenamiento
  renderCart(); // Vuelve a renderizar
}

// Función para vaciar el carrito
function clearCart() {
  cartItems = [];
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

// Renderiza el carrito al cargar la página
renderCart();

function comprarCart(){
    if (cartItems.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
        return;
      }
    
      alert("¡Carrito comprado! Gracias por tu compra.");
      clearCart(); // Vacía el carrito después de la compra
}