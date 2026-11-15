function verifierAge(majeur) {
    if (majeur) {
        // Fermer la fenêtre immédiatement
        const fenetre = document.getElementById("age-verification");

        if (fenetre) {
            fenetre.style.display = "none";
        }

        try {
            sessionStorage.setItem("ageVerifie", "oui");
        } catch (erreur) {
            console.warn("Impossible de mémoriser la vérification d’âge.", erreur);
        }
    } else {
        window.location.replace("https://www.google.com");
    }
}


try {
    if (sessionStorage.getItem("ageVerifie") === "oui") {
        const fenetre = document.getElementById("age-verification");

        if (fenetre) {
            fenetre.style.display = "none";
        }
    }
} catch (erreur) {
    console.warn("Le stockage de session est indisponible.", erreur);
}