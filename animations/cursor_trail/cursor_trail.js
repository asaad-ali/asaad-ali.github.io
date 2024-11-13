const __FRAGMENT_CONTAINER = [];


function __create_fragment() {

    // Create element.
    const FRAGMENT = document.createElement("div");

    // Return element's reference.
    return FRAGMENT;
}


function __set_fragment(mouse_event, fragment) {

    // Set general properties.
    fragment.style.pointerEvents = "none";

    // Set shape and size.
    fragment.style.borderRadius = "50%";
    fragment.style.width = "10px";
    fragment.style.height = "10px";

    // Set position.
    fragment.style.position = "absolute";
    fragment.style.left = `${mouse_event.clientX - (10 / 2)}px`;
    fragment.style.top = `${mouse_event.clientY - (10 / 2)}px`;

    // Set colors.
    fragment.style.backgroundColor = "rgb(220, 110, 10)";
    fragment.style.boxShadow = `0px 0px 6px 2px ${fragment.style.backgroundColor}`;

    // Append to DOM.
    document.querySelector("main").appendChild(fragment);

    // Push to container.
    __FRAGMENT_CONTAINER.push(fragment);

    return null;
}


function __animate_fragment(fragment) {

    // Store starting size and opacity.
    let new_size = 10;
    let new_opacity = 1.0;

    // Define callback function.
    function animate_element() {

        // Calculate and store new size and opacity.
        new_size = new_size - 0.5;
        new_opacity = new_opacity - 0.05;

        // Assign calculated values to element.
        fragment.style.width = `${new_size}px`
        fragment.style.height = `${new_size}px`
        fragment.style.opacity = `${new_opacity}`

        // Compare element size and opacity to allowed limit.
        if (new_size <= 0 || new_opacity <= 0) {

            // If so, remove element from DOM.
            fragment.remove();
        }
        else {

            // If not, schedule function for callback
            requestAnimationFrame(animate_element);
        }
    }

    // Call function to start animation.
    animate_element();

    return null;
}


function __limit_container() {

    // Check if container has reached allowed limit.
    if (__FRAGMENT_CONTAINER.length > 10) {

        // If so,

        // Remove oldest element in container from DOM.
        __FRAGMENT_CONTAINER[0].remove();

        // Remove oldest element from container and shift remaining fragments.
        __FRAGMENT_CONTAINER.shift();
    }

    return null;
}


/**
 * @description
 * Inserts event listener `"mousemove"` into `<main>`.  
 * Listens for cursor movement over specified content area and applies effect.
 * @returns {null} null
 */
export function cursor_trail() {

    // Add event listener for mouse move event into <main>.
    document.querySelector("main").addEventListener("mousemove", (event) => {

        const FRAGMENT = __create_fragment();

        __set_fragment(event, FRAGMENT);

        __animate_fragment(FRAGMENT);

        __limit_container();
    });

    return null;
}