// Open Side Menu
function openNav() {
  let sidenav = document.getElementById("mySidenav");

  if (window.innerWidth <= 600) {
    // 📱 Mobile
    sidenav.style.width = "220px";
  } else if (window.innerWidth <= 992) {
    // 📲 Tablet
    sidenav.style.width = "280px";
  } else {
    // 💻 Desktop
    sidenav.style.width = "350px";
  }
}

// Close Side Menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// 👂 Optional: Adjust menu size when resizing window
window.addEventListener("resize", function () {
  let sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width !== "0px" && sidenav.style.width !== "") {
    openNav(); // reopen with correct width
  }
});

// Toggle Language Menu
function toggleLanguageMenu() {
  let dropdown = document.getElementById("langDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close language menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.lang-btn')) {
    let dropdown = document.getElementById("langDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}


