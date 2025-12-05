// Utility helper functions

export function parseNum(v) {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
}

export function formatMoney(v, currency = "EUR") {
    return `${v.toFixed(2)} ${currency}`;
}

export function formatCBM(l, w, h) {
    if (!l || !w || !h) return 0;
    return (l * w * h) / 1_000_000;
}
