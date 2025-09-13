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

// Toggle dropdown
function toggleLanguageMenu() {
  document.getElementById("langDropdown").style.display =
    document.getElementById("langDropdown").style.display === "block"
      ? "none"
      : "block";
}

// Set default as English on load
document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("selectedLang");
  langBtn.textContent = "🌐 EN ▼"; // Default
});

// Change language on click
document.querySelectorAll("#langDropdown a").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let langCode = this.getAttribute("data-code"); // get code
    document.querySelector(".lang-btn").textContent = "🌐 " + langCode + " ▼";

    // close dropdown after selecting
    document.getElementById("langDropdown").style.display = "none";
  });
});


// Close language menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.lang-btn')) {
    let dropdown = document.getElementById("langDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}


