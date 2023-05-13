/* ********** Menu ********** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);

  /* ********** tabla ********** */

  window.onscroll = function() {myFunction()};

var tableHeader = document.querySelector("td:first-child");

function myFunction() {
  if (window.pageYOffset > tableHeader.offsetTop) {
    tableHeader.style.top = window.pageYOffset - tableHeader.offsetTop + "px";
  } else {
    tableHeader.style.top = "0";
  }
}

    /* fijar primera columna */

// Selecciona todas las tablas en la página
const tables = document.querySelectorAll("table");

// Recorre cada tabla
tables.forEach((table) => {
  // Selecciona todas las filas de la tabla
  const rows = table.querySelectorAll("tr");

  // Recorre cada fila
  rows.forEach((row, index) => {
    // Si la fila no es la primera (que contiene el encabezado de la tabla)
    // y el índice es par (es decir, la segunda, cuarta, sexta, etc.)
    if (index !== 0 && index % 2 !== 0) {
      // Selecciona la primera celda de la fila y le cambia el color de fondo
      const firstCell = row.querySelector("td:first-child");
      firstCell.style.backgroundColor = "var(--color-celdas)";
    }
  });

});