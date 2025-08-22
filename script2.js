document.addEventListener('DOMContentLoaded', function() {
    const forgiveButton = document.getElementById('forgiveButton');
    const fullscreenImage = document.getElementById('fullscreenImage');

    forgiveButton.addEventListener('click', () => {
        fullscreenImage.style.display = 'flex';
        fullscreenImage.style.opacity = '0';

        // Fade in animation
        setTimeout(() => {
            fullscreenImage.style.transition = 'opacity 1s ease';
            fullscreenImage.style.opacity = '1';
        }, 100);
    });
});
