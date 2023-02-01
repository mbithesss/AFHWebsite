function toggleNav() {
  var x = document.getElementById("nav-wrapper");
  if (x.className === "nav-wrapper-content") {
    x.className += " responsive";
  } else {
    x.className = "nav-wrapper-content";
  }
}

document.getElementById("checkbox_toggle").addEventListener("change", toggleNav);
document.getElementById("hamburger").addEventListener("click", toggleNav);
