document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const doctorsList = document.getElementById("doctorsList");
    const doctorCards = document.querySelectorAll(".doctor-card");

    searchInput.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase().trim();
        let hasResults = false;

        doctorCards.forEach((card) => {
            const doctorName = card.querySelector("p").textContent.toLowerCase();
            const doctorSpecialty = card.querySelector("span").textContent.toLowerCase();

            if (doctorName.includes(searchValue) || doctorSpecialty.includes(searchValue)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!hasResults) {
            doctorsList.innerHTML = `<p class="no-results">Aucun médecin ne correspond à votre recherche.</p>`;
        } else {
            document.querySelector(".no-results")?.remove();
        }
    });
});
