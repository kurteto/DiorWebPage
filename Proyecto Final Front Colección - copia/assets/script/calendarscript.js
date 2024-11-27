const months = [
    { name: "Enero", events: ["10", "20", "25"] },
    { name: "Febrero", events: ["05", "15", "28"] },
    { name: "Marzo", events: ["01", "12", "21"] },
    { name: "Abril", events: ["09", "14", "30"] },
    { name: "Mayo", events: ["05", "17", "27"] },
    { name: "Junio", events: ["03", "10", "24"] },
    { name: "Julio", events: ["08", "18", "25"] },
    { name: "Agosto", events: ["02", "11", "23"] },
    { name: "Septiembre", events: ["06", "14", "30"] },
    { name: "Octubre", events: ["03", "12", "22"] },
    { name: "Noviembre", events: ["04", "15", "27"] },
    { name: "Diciembre", events: ["01", "18", "31"] }
  ];
  
  const carouselSlide = document.querySelector(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const currentDateElement = document.getElementById("current-date");
  const daysToNextEventElement = document.getElementById("days-to-next-event");
  
  let currentSlide = 0;
  
  // Obtener fecha actual
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  
  // Mostrar fecha actual en formato legible
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  currentDateElement.textContent = `Hoy es ${today.toLocaleDateString("es-ES", options)}`;
  
  // Calcular días para el próximo desfile
  function getNextEvent() {
    for (let i = todayMonth; i < months.length; i++) {
      const events = months[i].events.map(Number).sort((a, b) => a - b);
      for (let event of events) {
        if (i > todayMonth || event >= todayDate) {
          const eventDate = new Date(todayYear, i, event);
          const daysLeft = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
          return { month: months[i].name, day: event, daysLeft };
        }
      }
    }
    return null; // Si no hay más eventos en el año
  }
  
  const nextEvent = getNextEvent();
  if (nextEvent) {
    daysToNextEventElement.textContent = `El próximo desfile es el ${nextEvent.day} de ${nextEvent.month}, en ${nextEvent.daysLeft} día(s).`;
  } else {
    daysToNextEventElement.textContent = "No hay más desfiles programados para este año.";
  }
  
  // Renderizar meses y fechas
  function renderMonths() {
    carouselSlide.innerHTML = "";
    months.forEach((month, index) => {
      const monthCard = document.createElement("div");
      monthCard.classList.add("month-card");
  
      // Añadir contenido a cada tarjeta
      monthCard.innerHTML = `
        <h3>${month.name}</h3>
        <ul>
          ${month.events
            .map((event) => {
              if (event == todayDate && index === todayMonth) {
                return `<li class="current-date">${event} - Hoy</li>`;
              } else {
                return `<li class="event-date">${event}</li>`;
              }
            })
            .join("")}
        </ul>
      `;
      carouselSlide.appendChild(monthCard);
    });
  }
  
  // Mover el carrusel
  function updateCarousel() {
    const offset = -currentSlide * 220; // Ancho de la tarjeta + margen
    carouselSlide.style.transform = `translateX(${offset}px)`;
  }
  
  // Botones de navegación
  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentSlide < months.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  });
  
  // Inicializar
  renderMonths();
  updateCarousel();
  
  
