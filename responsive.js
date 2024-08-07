document.addEventListener("DOMContentLoaded", function() {
    const mesoTextContainer = document.querySelector('.ImageContainer');
    const textOverlays = document.querySelectorAll('.text-overlay');
    const mesoTextDiv = mesoTextContainer.querySelector('.meso-text');

    function moveTextOverlayToMesoText() {
        textOverlays.forEach((textOverlay, index) => {
            let transferredTextDiv = mesoTextContainer.querySelector('.transferred-text');
            if (!transferredTextDiv) {
                transferredTextDiv = document.createElement('div');
                transferredTextDiv.className = 'transferred-text';
            }
            if (window.innerWidth <= 768) {
                transferredTextDiv.innerHTML = textOverlay.innerHTML;
                mesoTextContainer.insertBefore(transferredTextDiv, mesoTextDiv);
                textOverlay.style.display = 'none'; 
            } else {
            
                if (transferredTextDiv.parentNode) {
                    transferredTextDiv.parentNode.removeChild(transferredTextDiv);
                }
                textOverlay.style.display = 'block'; 
            }
        });
    }
    moveTextOverlayToMesoText();
    window.addEventListener('resize', moveTextOverlayToMesoText);
});
