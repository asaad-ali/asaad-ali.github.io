const __CLASS_NAME = "header-toggle-active"
const __LIST = document.getElementById("header-list");
const __BUTTON = document.getElementById("header-toggle");


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
export function header_menu() {

    // Set list element display style to none.
    __LIST.style.display = "none";

    // Remove class off button element.
    __BUTTON.classList.toggle(__CLASS_NAME, false);

    // Add event listener for click event.
    __BUTTON.addEventListener("click", () => {

        // Toggle class on button element.
        __BUTTON.classList.toggle(__CLASS_NAME);

        // Check if button element contains class.
        if (__BUTTON.classList.contains(__CLASS_NAME)) {

            // If so, set list element display style to flex.
            __LIST.style.display = "flex";

        } else {

            // If not, set list element display style to none.
            __LIST.style.display = "none";

            // Clicks on logo to force hover off button element (for phones).
            document.getElementById("header-logo").click();
        }
    });

    // Add event listener for click event.
    document.addEventListener("click", (event) => {

        // Check if button element contains class.
        if (__BUTTON.classList.contains(__CLASS_NAME)) {

            // Check if click occured outside of button and list elements.
            if (!__BUTTON.contains(event.target) && !__LIST.contains(event.target)) {

                // If so,

                // Toggle class on button element.
                __BUTTON.classList.toggle(__CLASS_NAME);

                // Set list element display style to none.
                __LIST.style.display = "none";
            }
        }
    });

    return null;
}