// UI controller module (placeholder for now)

import { parseNum, formatMoney } from "./utils.js";
import { fetchRates } from "./api.js";

export function initUI() {
    console.log("UI initialized");
}

export function attachEvents() {
    console.log("UI events attached");
}

export async function refreshRates() {
    const data = await fetchRates();
    if (data.error) {
        alert("Nepavyko gauti valiutų kursų: " + data.error);
        return;
    }

    console.log("Kursai gauti:", data);
}
