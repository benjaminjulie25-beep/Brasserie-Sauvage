const formulaire = document.getElementById("formulaire-contact");

if (formulaire) {
    formulaire.addEventListener("submit", function (evenement) {
        evenement.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const sujet = encodeURIComponent(
            "Contact Brasserie Sauvage — " + nom
        );

        const contenu = encodeURIComponent(
            "Nom : " + nom + "\n" +
            "Adresse e-mail : " + email + "\n\n" +
            message
        );

        window.location.href =
            "mailto:ben3003@outlook.com?subject=" +
            sujet +
            "&body=" +
            contenu;
    });
}