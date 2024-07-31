window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    loadingScreen.style.display = 'flex'; 
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        // content.style.display = 'block';
    }, 500); 
});