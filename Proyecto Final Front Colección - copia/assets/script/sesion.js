// Mostrar login y ocultar introducción
function showLogin() {
  document.getElementById('intro-section').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('login-box').style.display = 'block';
  document.getElementById('signup-box').style.display = 'none';
  document.getElementById('main-page-link').style.display = 'none';
  document.getElementById('login-confirmation').style.display = 'none';
}

// Mostrar formulario de registro
function showSignUp() {
  document.getElementById('login-box').style.display = 'none';
  document.getElementById('signup-box').style.display = 'block';
  document.getElementById('signup-confirmation').style.display = 'none';
}

// Manejar inicio de sesión
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Simula validación de usuario
  document.getElementById('login-confirmation').style.display = 'block';
  document.getElementById('login-confirmation').innerText = 'Inicio de sesión completado';
  document.getElementById('main-page-link').style.display = 'block';
});

// Manejar registro
document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();
  // Simula validación de registro
  document.getElementById('signup-confirmation').style.display = 'block';
  document.getElementById('signup-confirmation').innerText = 'Registro completado';
  document.getElementById('main-page-link').style.display = 'block';
});
