// 🔝 SCROLL TO TOP BUTTON
let topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "flex";
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

// 📩 FORM HANDLING WITH VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;
    const messageEl = document.getElementById("message");
    const button = form.querySelector("button");
    const inputs = form.querySelectorAll("input, textarea");

    // Validation
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = "#ef4444";
        } else {
            input.style.borderColor = "#e5e7eb";
        }
    });

    if (!isValid) {
        messageEl.textContent = "❌ Veuillez remplir tous les champs";
        messageEl.className = "error";
        return;
    }

    // Email validation
    const emailInput = form.querySelector("input[type='email']");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        messageEl.textContent = "❌ Veuillez entrer une adresse email valide";
        messageEl.className = "error";
        emailInput.style.borderColor = "#ef4444";
        return;
    }

    // Show loading state
    const originalText = button.textContent;
    button.textContent = "";
    button.innerHTML = '<div class="loading"></div>';
    button.disabled = true;

    // Simulate form submission (in production, send to backend)
    setTimeout(() => {
        messageEl.textContent = "✅ Message envoyé avec succès ! Nous vous répondrons bientôt.";
        messageEl.className = "success";
        form.reset();
        inputs.forEach(input => input.style.borderColor = "#e5e7eb");
        
        // Reset button
        button.textContent = originalText;
        button.disabled = false;

        // Hide message after 5 seconds
        setTimeout(() => {
            messageEl.textContent = "";
            messageEl.className = "";
        }, 5000);
    }, 1500);
});

// ⚡ SCROLL ANIMATION FOR CARDS
let elements = document.querySelectorAll(".card");

// Initial setup for cards
elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
});

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

elements.forEach(el => observer.observe(el));

// 🎨 SMOOTH SCROLL BEHAVIOR (polyfill for older browsers)
if (!("scrollBehavior" in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({behavior: "smooth"});
            }
        });
    });
}

// 📱 Mobile menu (for future enhancement)
console.log("🏪 Site de boutique chargé avec succès!");
