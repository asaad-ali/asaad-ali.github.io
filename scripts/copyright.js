export function copyright()
{
    const year = "2025-" + (((new Date()).getFullYear()) + 1).toString();

    const final_string = year + " Asaad Ali. All rights reserved.";

    document.getElementById("copyright-string").textContent = final_string;
}