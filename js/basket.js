const basketLinks = document.querySelectorAll(".catalog-buy");
const basketPopup = document.querySelector(".popup-cart");
const basketClose = basketPopup.querySelector(".modal-close");

basketLinks.forEach(basketLink => {
    basketLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        basketPopup.classList.add("modal-show");
      });
})

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});
