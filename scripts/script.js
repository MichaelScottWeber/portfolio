

let openBtns  = document.getElementsByClassName("project"),
    modals    = document.getElementsByClassName("modal"),
    closeBtns = document.getElementsByClassName("close");

for(let i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener("click", function() {
    modals[i].style.display = "block";
  });
  closeBtns[i].addEventListener("click", function() {
    modals[i].style.display = "none";
  });
  window.addEventListener("click", function(event) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  });
}
