// js/main.js
// Nexum Imperium — minimal + organizado

(() => {
  const $ = (id) => document.getElementById(id);

  // ===== Links oficiais (troque aqui e pronto) =====
  const LINKS = {
    loja: "https://nexumimperium.base44.app",
    ggmax: "https://ggmax.com.br/perfil/Rapha008",
    discord: "https://discord.gg/7ZvzmZJz",
    email: "mailto:nexumimperium@gmail.com",
  };

  // Ano no footer
  const year = $("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Status
  const statusText = $("statusText");
  const statusDot = $("statusDot");
  if (statusText) statusText.textContent = "Online";
  if (statusDot) statusDot.style.background = "#3ad18a";

  // Mensagem fixa
  const mote = $("mote");
  if (mote) mote.textContent = "Disciplina cria resultado.";

  // Quick links
  const linkLoja = $("linkLoja");
  const linkGG = $("linkGG");
  const linkDiscord = $("linkDiscord");
  if (linkLoja) linkLoja.href = LINKS.loja;
  if (linkGG) linkGG.href = LINKS.ggmax;
  if (linkDiscord) linkDiscord.href = LINKS.discord;

  // Email
  const btnEmail = $("btnEmail");
  const emailLink = $("emailLink");
  if (btnEmail) btnEmail.href = LINKS.email;
  if (emailLink) emailLink.href = LINKS.email;

  // Mobile menu toggle
  const menuBtn = $("menuBtn");
  const mobileMenu = $("mobileMenu");

  const setMobile = (open) => {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.toggle("open", open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      setMobile(!isOpen);
    });

    // fecha ao clicar em qualquer link
    mobileMenu.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.tagName === "A") setMobile(false);
    });
  }
})();

