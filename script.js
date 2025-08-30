document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".botones button");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert(`Hiciste clic en: ${boton.textContent}`);
    });
  });
});