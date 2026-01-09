
const photos = [
  { title: "Montanha", url: "../assets/montanha.jpg" },
  { title: "Floresta", url: "../assets/floresta.jpg" },
  { title: "Praia", url: "../assets/praia.jpg" },
  { title: "Cidade", url: "../assets/cidade.jpg" },
  { title: "Deserto", url: "../assets/deserto.jpg" },
  { title: "Neve", url: "../assets/neve.jpg" },
  { title: "Cachoeira", url: "../assets/cachoeira.jpg" },
  { title: "Estrada", url: "../assets/estrada.jpeg" },
  { title: "Céu", url: "../assets/ceu.jpg" },
  { title: "Pôr do Sol", url: "../assets/pordoSol.jpg" },
  { title: "Coliseu", url: "../assets/coliseu.jpg" },
  { title: "Torre Eiffel", url: "../assets/torre.jpg" },
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderPhotos(filteredPhotos) {
  gallery.innerHTML = "";

  if (filteredPhotos.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filteredPhotos.forEach(photo => {
    const card = document.createElement("div");
    card.className = "photo-card";

    card.innerHTML = `
          <img src="${photo.url}" alt="${photo.title}">
          <p>${photo.title}</p>
        `;

    gallery.appendChild(card);
  });
}

// Busca em tempo real
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm)
  );
  renderPhotos(filtered);
});

// Inicialização
renderPhotos(photos);