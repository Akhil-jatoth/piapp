// Open Side Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
}

// Close Side Menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

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


