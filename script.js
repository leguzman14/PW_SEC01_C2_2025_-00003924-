// Botón 1
document.getElementById("cambiar_layout").addEventListener("click", () => {
  const cuadricula = document.querySelector(".cuadricula");
  if (cuadricula.classList.contains("vertical")) {
    cuadricula.classList.remove("vertical");
    cuadricula.style.gridTemplateColumns = "repeat(3, 1fr)";
  } else {
    cuadricula.classList.add("vertical");
    cuadricula.style.gridTemplateColumns = "1fr";
  }
});

// Botón 2
document.getElementById("cambiar_titulo").addEventListener("click", () => {
  const titulo = document.querySelector(".barra h1");
  titulo.textContent = "HTML & CSS: Curso práctico avanzado";
});

// Botón 3
document.getElementById("cambiar_color").addEventListener("click", () => {
  const titulos = document.querySelectorAll(".carta h2");
  const parrafos = document.querySelectorAll(".carta p");

  titulos.forEach(el => {
    el.style.color = el.style.color === "crimson" ? "#111" : "crimson";
  });
  parrafos.forEach(el => {
    el.style.color = el.style.color === "darkslategray" ? "#111" : "darkslategray";
  });
});

// Botón 4
document.getElementById("cambiar_imagen").addEventListener("click", () => {
  const contenedor = document.getElementById("contenedor_imagen");

  // Verifica si ya existe una imagen para que no se creen imagenes infinitas
  if (!contenedor.querySelector("img")) {
    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCjnwLx7pHXqHtWWVOpEA2W-h08zr4D832A&s"; 
    img.alt = "Imagen Footer";
    img.style.width = "280px";
    img.style.marginTop = "15px";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";
    contenedor.appendChild(img);
  }
});