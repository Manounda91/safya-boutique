// --- 1. GESTION DU MENU BURGER (MOBILE) ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) { // Sécurité pour l'examen : on vérifie que l'élément existe
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- 2. GESTION DU COMPTEUR DE PANIER ---
// On sélectionne tous les boutons qui ont la classe "btn-add"
const cartButtons = document.querySelectorAll('.btn-add');
// On sélectionne la petite bulle orange du compteur
const cartBadge = document.getElementById('cart-count');

let count = 0; // Le compteur commence à zéro

// On dit au JS de surveiller chaque bouton
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++; // On ajoute 1 au compteur
        cartBadge.innerText = count; // On met à jour l'affichage sur le site
        
        // Petite animation de confirmation (optionnel mais sympa)
        console.log("Article ajouté ! Nouveau total : " + count);
    });
});