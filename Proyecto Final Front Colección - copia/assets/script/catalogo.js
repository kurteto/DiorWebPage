// Variables globales
let currentImageIndex = 0;
let images = [];

// Función para abrir el carrusel
function openCarousel(imageIndex, imageArray) {
  images = imageArray; // Recibe las imágenes del producto
  currentImageIndex = imageIndex;

  const carouselModal = document.getElementById('carouselModal');
  const carouselImage = document.getElementById('carouselImage');

  carouselModal.style.display = 'block';
  carouselImage.src = images[imageIndex];
}

// Función para cerrar el carrusel
function closeCarousel() {
  document.getElementById('carouselModal').style.display = 'none';
}

// Función para cambiar de imagen
function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  document.getElementById('carouselImage').src = images[currentImageIndex];
}

// Añadir al carrito
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} ha sido añadido al carrito.`);
}
