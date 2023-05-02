const monthName = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthName.innerText = date.toLocaleString("eng", {
    month: "long"
})

dayNameEl.innerText = date.toLocaleString("eng", {
    weekday: "long"
})

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();