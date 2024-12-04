const statsData = [
    { id: "patients-daily", title: "Patients Quotidiens", unit: "", value: () => Math.floor(Math.random() * 50) + 1 },
    { id: "consultations-monthly", title: "Consultations Mensuelles", unit: "", value: () => Math.floor(Math.random() * 200) + 50 },
    { id: "tests-performed", title: "Tests Réalisés", unit: "", value: () => Math.floor(Math.random() * 100) + 10 },
    { id: "patient-satisfaction", title: "Satisfaction", unit: "%", value: () => Math.min(Math.floor(Math.random() * 100) + 1, 100) }
];

const patients = [
    { id: "Patient-001" },
    { id: "Patient-002" },
    { id: "Patient-003" },
    { id: "Patient-004" }
];

function updateStats() {
    statsData.forEach(stat => {
        const element = document.getElementById(stat.id);
        if (element) {
            element.innerHTML = `
                ${stat.value()}${stat.unit}<br><span>${stat.title}</span>
            `;
        }
    });
}

function generateForms() {
    const formsContainer = document.getElementById("forms-container");
    patients.forEach((patient, index) => {
        const form = document.createElement("div");
        form.classList.add("form");
        form.innerHTML = `
            <h3>${patient.id}</h3>
            <label>Date</label>
            <input type="date" id="date-${index}">
            <label>Heure</label>
            <input type="time" id="time-${index}">
            <button onclick="submitForm(${index})">Planifier</button>
        `;
        formsContainer.appendChild(form);
    });
}

function submitForm(index) {
    const date = document.getElementById(`date-${index}`).value;
    const time = document.getElementById(`time-${index}`).value;
    if (!date || !time) {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    const schedule = document.getElementById("schedule");
    const entry = document.createElement("div");
    entry.textContent = `${patients[index].id} - ${date} à ${time}`;
    schedule.appendChild(entry);
    alert("Visite planifiée avec succès !");
}

updateStats();
generateForms();
