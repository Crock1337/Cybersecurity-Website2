const revealButton = document.getElementById('reveal-file-btn');
const hiddenFile = document.getElementById('hidden-file');
const revealInfoButton = document.getElementById('reveal-info-btn');
const hiddenInfo = document.getElementById('hidden-info');

revealButton.addEventListener('click', () => {
    hiddenFile.classList.toggle('show');
});

revealInfoButton.addEventListener('click', () => {
    hiddenInfo.classList.toggle('show');
});
