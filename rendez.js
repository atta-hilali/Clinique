document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointmentForm");
    const paymentForm = document.getElementById("paymentForm");
    const appointmentConfirmation = document.getElementById("appointmentConfirmation");
    const paymentConfirmation = document.getElementById("paymentConfirmation");

    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("appointmentName").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        appointmentConfirmation.textContent = `Rendez-vous fixé pour ${name} le ${date} à ${time}.`;
        appointmentConfirmation.classList.remove("hidden");
        appointmentForm.reset();
    });

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("paymentName").value;
        const amount = document.getElementById("paymentAmount").value;
        const method = document.getElementById("paymentMethod").value;
        paymentConfirmation.textContent = `Paiement de ${amount} DT effectué avec succès pour ${name} via ${method}.`;
        paymentConfirmation.classList.remove("hidden");
        paymentForm.reset();
    });
});
