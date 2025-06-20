const headerLinks = document.querySelectorAll(".header-link");

if (headerLinks.length > 0) {
    const currentPage = window.location.pathname.split("/").pop();

    headerLinks.forEach(headerLink => {
        if (headerLink.href.includes(currentPage)) {
            headerLink.classList.add("header-active-link");
        }
    });
}