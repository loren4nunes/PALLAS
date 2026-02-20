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

function abrirModal(img){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("imgPrincipal").src = img;
}

function fecharModal(){
  document.getElementById("modal").style.display = "none";
}

function trocarImagem(src){
  document.getElementById("imgPrincipal").src = src;
}
