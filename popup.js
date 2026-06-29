window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('popup-promo').classList.add('popup-visivel');
  }, 2500);
});

function fecharPopup() {
  document.getElementById('popup-promo').classList.remove('popup-visivel');
}