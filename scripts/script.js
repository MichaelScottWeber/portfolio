
// Project Modal
const modal = document.getElementById("myModal"),
      btn   = document.getElementById("myBtn"),
      close = document.getElementById("close");

btn.onclick = function() {
  modal.style.display = "block";
};

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
};
