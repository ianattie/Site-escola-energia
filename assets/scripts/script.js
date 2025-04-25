function mostrarPopup(texto) {
    document.getElementById('popup-texto').innerText = texto;
    document.getElementById('popup').style.display = 'block';
  }

  function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      fecharPopup();
    }
});