const ACTIVE_STATE = "header-toggle-active";

const HEADER_TOGGLE = document.getElementById("header-toggle");

const HEADER_LIST = document.getElementById("header-list");

function HANDLE_MENU_CLOSE(event)
{
    if (!HEADER_TOGGLE.contains(event.target) && !HEADER_LIST.contains(event.target))
    {
        HEADER_TOGGLE.classList.remove(ACTIVE_STATE);

        HEADER_LIST.classList.remove(ACTIVE_STATE);

        document.removeEventListener("click", HANDLE_MENU_CLOSE);
    }
}

/**
 * @description
 * Target element id: "header-toggle" in document and add event listener "click".
 * Event listener targets element id: "header-toggle" and "header-list" in document
 * and toggles "header-toggle-active".
 * @returns {void}
 */
export function nav_menu()
{
    HEADER_TOGGLE.addEventListener("click", () =>
    {
        HEADER_TOGGLE.classList.toggle(ACTIVE_STATE);

        HEADER_LIST.classList.toggle(ACTIVE_STATE);

        if (HEADER_TOGGLE.classList.contains(ACTIVE_STATE))
        {
            document.addEventListener("click", HANDLE_MENU_CLOSE);
        }
        else
        {
            document.removeEventListener("click", HANDLE_MENU_CLOSE);
        }
    });
}
