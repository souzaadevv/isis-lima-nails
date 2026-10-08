const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostraModal(){

    modal.style.left = '-100%'; 
    modal.style.visibility = 'visible';
    mascara.style.visibility = 'visible'
}

function esconderModal(){

    modal.style.left = '-30%'; 
    mascara.style.visibility = 'hidden'
}

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");

let currentIndex = 0;

// ========================================
// MOSTRAR SLIDE
// ========================================

function showSlide(index) {

    if (index < 0) {
        currentIndex = slides.length - 1;
    } 
    else if (index >= slides.length) {
        currentIndex = 0;
    } 
    else {
        currentIndex = index;
    }

    // Move o carrossel
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza as bolinhas
    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentIndex
        );
    });
}

// ========================================
// BOTÃO PRÓXIMO
// ========================================

nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

// ========================================
// BOTÃO ANTERIOR
// ========================================

prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

// ========================================
// BOLINHAS
// ========================================

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

// ========================================
// TECLADO
// ========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        showSlide(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(currentIndex - 1);
    }

});

// ========================================
// AUTOPLAY
// ========================================

let autoplay = setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// ========================================
// PAUSAR AO PASSAR O MOUSE
// ========================================

carousel.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
});

carousel.addEventListener("mouseleave", () => {

    autoplay = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

});


console.log("JavaScript carregado!");







function mudarIdioma(idioma) {

    // Atualiza o idioma do documento
    document.documentElement.lang = idioma;

    // Traduz todos os elementos marcados
    document.querySelectorAll("[data-pt][data-en]").forEach(elemento => {

        elemento.textContent =
            idioma === "en"
                ? elemento.dataset.en
                : elemento.dataset.pt;

    });

    // Guarda a escolha do visitante
    localStorage.setItem("idiomaPreferido", idioma);
}


// Aplica o idioma escolhido quando a página abre
document.addEventListener("DOMContentLoaded", () => {

    const idiomaGuardado = localStorage.getItem("idiomaPreferido");

    mudarIdioma(idiomaGuardado || "pt-BR");

});


const video = document.querySelector(".caixa-video video");

document.addEventListener("touchstart", () => {
    video.play().catch(() => {});
}, { once: true });
