document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(showPopup, 5000);
    const popupOverlay = document.getElementById('popup-overlay');
    const popupClose = document.getElementById('popup-close');
  
    function showPopup() {
      popupOverlay.classList.add('active');
      document.body.classList.add('noscroll');
    }
  
    function hidePopup() {
      popupOverlay.classList.remove('active');
      document.body.classList.remove('noscroll');
    }
  
    popupClose.addEventListener('click', hidePopup);
    popupOverlay.addEventListener('click', (event) => {
      if (event.target === popupOverlay) {
        hidePopup();
      }
    });
  });
  