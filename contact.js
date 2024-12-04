document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        confirmationMessage.classList.remove("hidden");
        contactForm.reset();
    });
});
