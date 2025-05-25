/**
 * @description
 * Targets `element id: "copyright-string"` and sets `.textContent`.
 * @returns {null} null
 */
export function copyright() {

    const YEAR = "2025-" + (((new Date()).getFullYear()) + 1);
    const NAME = "Asaad Ali";
    const NOTICE = "All rights reserved."

    // Structure copyright string.
    const FINAL_STRING = YEAR + " " + NAME + ". " + NOTICE;

    // Set copyright string.
    document.getElementById("copyright-string").textContent = FINAL_STRING;

    return null;
}
