document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

// 💡 Védelmi kódok itt jönnek:
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && (e.key === 'u' || e.key === 's')) ||
    e.key === 'PrintScreen'
  ) {
    e.preventDefault();
    alert("Ez a művelet le van tiltva!");
  }
});
