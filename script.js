// 🌙 MODE SOMBRE
function toggleTheme() {
    document.body.classList.toggle("light");
}

// 🔝 BOUTON TOP
let topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// 📩 FORMULAIRE
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("message").innerText =
        "✅ Message envoyé avec succès !";

    this.reset();
});

// ⚡ ANIMATION SCROLL
let elements = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        let pos = el.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if (pos < screen - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});