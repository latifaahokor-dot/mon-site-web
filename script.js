// Message lors de l'envoi du formulaire

const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Votre message a été envoyé avec succès !");

    formulaire.reset();

});