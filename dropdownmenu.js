const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

function handleResize() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
    navLinks.style.display = "none"; 
  } else {
    hamburger.style.display = "none";
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    navLinks.style.display = "flex"; 
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", toggleMenu);
});

handleResize();

window.addEventListener("resize", handleResize);
