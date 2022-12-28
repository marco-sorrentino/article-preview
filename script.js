const arrow = document.getElementById("arrowid");
const share = document.querySelector(".rectangle");

arrow.addEventListener("click", () => {
  share.classList.toggle("hidden");
});
