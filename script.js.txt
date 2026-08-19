let selectedRating = 0;
let currentSkin = "";

function loginSteam() {
  /*
    DEMO

    Para produção, NÃO peça:
    - senha Steam
    - Steam Guard
    - código de autenticação

    O botão deve enviar o usuário para seu backend,
    que inicia o Steam OpenID.

    Exemplo:

    window.location.href = "/auth/steam";
  */

  alert(
    "Login Steam: configure o Steam OpenID no backend para ativar esta função."
  );
}

function rateSkin(skin) {
  currentSkin = skin;

  document.getElementById("modalTitle").textContent =
    "Avaliar " + skin;

  document.getElementById("modal").classList.add("active");

  selectedRating = 0;

  document
    .querySelectorAll(".stars-select button")
    .forEach(button => {
      button.classList.remove("selected");
    });
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

function selectRating(rating) {
  selectedRating = rating;

  document
    .querySelectorAll(".stars-select button")
    .forEach((button, index) => {
      button.classList.toggle(
        "selected",
        index < rating
      );
    });
}

function submitRating() {
  if (selectedRating === 0) {
    alert("Escolha uma nota de 1 a 5 estrelas.");
    return;
  }

  const comment =
    document.getElementById("comment").value.trim();

  console.log({
    skin: currentSkin,
    rating: selectedRating,
    comment: comment
  });

  alert(
    `Avaliação enviada!\n\n${currentSkin}\nNota: ${selectedRating}/5`
  );

  document.getElementById("comment").value = "";

  closeModal();
}

function searchSkins() {
  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const cards =
    document.querySelectorAll(".skin-card");

  cards.forEach(card => {
    const name =
      card
        .querySelector("h3")
        .textContent
        .toLowerCase();

    card.style.display =
      name.includes(search)
        ? "block"
        : "none";
  });
}

function filterSkins() {
  const filter =
    document.getElementById("filter").value;

  const cards =
    document.querySelectorAll(".skin-card");

  cards.forEach(card => {
    const type = card.dataset.type;

    card.style.display =
      filter === "all" || type === filter
        ? "block"
        : "none";
  });
}

document
  .getElementById("modal")
  .addEventListener("click", event => {
    if (event.target.id === "modal") {
      closeModal();
    }
  });
