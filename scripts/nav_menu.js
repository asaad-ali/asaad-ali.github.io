/**
 * @description
 * Sets `element id: "header-list"` display style to `none`.  
 * Removes `class: "header-toggle-active"` off `element id: "header-toggle"`.  
 * Inserts event listener `"click"` into `"header-toggle"`.  
 * Inserts event listener `"click"` into `document`.  
 *   
 * On `"header-toggle"` click, toggles element with class: `"header-toggle-active"`.  
 * If element contains class, `"header-list"`'s display style is set to `flex`.
 * If not, display style is set to `none`.  
 * If click is not on `"header-toggle"` or `"header-list"` display style is set to `none`.
 * @returns {null} null
 */
export function nav_menu() {

    const ACTIVE_STATE = "header-toggle-active";
    const HEADER_LIST = document.getElementById("header-list");
    const HEADER_TOGGLE = document.getElementById("header-toggle");

    // Set list element display style to none.
    HEADER_LIST.style.display = "none";

    // Remove class off button element.
    HEADER_TOGGLE.classList.toggle(ACTIVE_STATE, false);

    // Add event listener for click event.
    HEADER_TOGGLE.addEventListener("click", () => {

        // Toggle class on button element.
        HEADER_TOGGLE.classList.toggle(ACTIVE_STATE);

        // Check if button element contains class.
        if (HEADER_TOGGLE.classList.contains(ACTIVE_STATE)) {

            // If so, set list element display style to flex.
            HEADER_LIST.style.display = "flex";

        } else {

            // If not, set list element display style to none.
            HEADER_LIST.style.display = "none";
        }
    });

    // Add event listener for click event.
    document.addEventListener("click", (event) => {

        // Check if button element contains class.
        if (HEADER_TOGGLE.classList.contains(ACTIVE_STATE)) {

            // Check if click occured outside of button and list elements.
            if (!HEADER_TOGGLE.contains(event.target) && !HEADER_LIST.contains(event.target)) {

                // If so,

                // Toggle class on button element.
                HEADER_TOGGLE.classList.toggle(ACTIVE_STATE);

                // Set list element display style to none.
                HEADER_LIST.style.display = "none";
            }
        }
    });

    return null;
}
