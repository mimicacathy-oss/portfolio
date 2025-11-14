// Load Header & Footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
      highlightActiveLink();
    });

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// Highlight active nav link
function highlightActiveLink() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

// Contact form (demo)
document.addEventListener("submit", e => {
  if (e.target.matches(".contact-form")) {
    e.preventDefault();
    alert("Message sent! (Demo)");
    e.target.reset();
  }
});