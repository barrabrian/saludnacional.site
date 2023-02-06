setInterval(function() {
  document.querySelector(".custom-social-proof").classList.add(
    "animation");
  document.querySelector(".custom-social-proof").style.opacity = 1;
  getName();
  setTimeout(() => {
    document.querySelector(".custom-social-proof").classList.remove(
      "animation");
    document.querySelector(".custom-social-proof").style.opacity = 0;
  }, 4000);
}, 8000);
