const overlay = document.getElementById("overlay");
const viewer = document.getElementById("viewer");

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => {
    const src = tile.dataset.project;

    overlay.classList.remove("hidden");

    viewer.innerHTML = `
      <iframe src="${src}"></iframe>
    `;

    requestAnimationFrame(() => {
      overlay.classList.add("active");
    });
  });
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.classList.remove("active");

    setTimeout(() => {
      overlay.classList.add("hidden");
      viewer.innerHTML = "";
    }, 300);
  }
});
