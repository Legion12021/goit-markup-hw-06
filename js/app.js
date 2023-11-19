(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const script_menuOpen = document.querySelector(".icon-menu");
    const script_menuClose = document.querySelector(".mobile-menu__button-close");
    script_menuOpen.addEventListener("click", (function() {
        document.documentElement.classList.add("is-open");
        document.documentElement.classList.add("lock");
    }));
    script_menuClose.addEventListener("click", (function() {
        document.documentElement.classList.remove("is-open");
        document.documentElement.classList.remove("lock");
    }));
    // window["FLS"] = false;
})();