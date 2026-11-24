// Botão flutuante de navegação (criado aqui para não repetir o HTML)
const pagina = location.pathname.split("/").pop() || "index.html";

// [nome, link, é subitem?]
const atalhos = [
  ["Início", "index.html"],
  ["História", "historia.html"],
  ["Linha do tempo", "historia.html#linha-do-tempo", true],
  ["Conceitos", "historia.html#conceitos", true],
  ["Personalidades", "personalidades.html"],
  ["Exposições", "exposicoes.html"],
  ["Galeria de fotos", "exposicoes.html#galeria", true],
  ["Fontes", "exposicoes.html#fontes", true],
  ["Quiz", "quiz.html"],
];

const nav = document.createElement("div");
nav.className = "nav";
nav.innerHTML = `
  <nav class="nav-painel" id="navPainel" aria-label="Atalhos do museu" hidden>
    ${atalhos
      .map(([nome, href, sub]) => {
        const atual = !sub && href === pagina;
        return `<a href="${href}" class="${sub ? "sub" : ""} ${atual ? "atual" : ""}">${nome}</a>`;
      })
      .join("")}
  </nav>
  <button class="nav-botao" id="navBotao" aria-expanded="false" aria-controls="navPainel">Navegar</button>`;
document.body.appendChild(nav);

const navBotao = document.getElementById("navBotao");
const navPainel = document.getElementById("navPainel");

function abrirNav(abrir) {
  navPainel.hidden = !abrir;
  navBotao.setAttribute("aria-expanded", String(abrir));
  navBotao.textContent = abrir ? "Fechar" : "Navegar";
}

navBotao.addEventListener("click", () => abrirNav(navPainel.hidden));
navPainel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => abrirNav(false)));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !navPainel.hidden) {
    abrirNav(false);
    navBotao.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!navPainel.hidden && !nav.contains(e.target)) abrirNav(false);
});

// Linha do tempo (abre um item por vez)
const itensTempo = document.querySelectorAll(".tempo-btn");

itensTempo.forEach((botao) => {
  botao.addEventListener("click", () => {
    const estavaAberto = botao.getAttribute("aria-expanded") === "true";
    itensTempo.forEach((b) => b.setAttribute("aria-expanded", "false"));
    botao.setAttribute("aria-expanded", String(!estavaAberto));
  });
});
