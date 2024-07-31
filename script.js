document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    const logoLink = document.getElementById("logo-link");


    const activeLinkId = localStorage.getItem("activeLinkId");
    if (activeLinkId) {
        const activeLink = document.getElementById(activeLinkId);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            localStorage.setItem("activeLinkId", this.id);
        });
    });

    logoLink.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        localStorage.removeItem("activeLinkId");
    });
});
