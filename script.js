// Transição simples: clica na página inicial e vai para o hub
document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const next = document.body.getAttribute("data-next");

  if (next) {
    document.addEventListener("click", () => {
      page.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = next;
      }, 240);
    });
  }
});
