// 1. Verify the script is loaded
console.log("iH Match System: Online");

// 2. Wait for the page to fully load before looking for the button
window.onload = function() {
    const secretTrigger = document.getElementById('secret-trigger');
    const gameUrl = "https://chvin.github.io/react-tetris/"; 

    if (secretTrigger) {
        secretTrigger.onclick = function() {
            // Test Alert: If you see this, the button works!
            alert("Loading Resource Portal...");

            // Wipe page and inject game
            document.body.innerHTML = '';
            document.body.style.margin = "0";
            
            let iframe = document.createElement('iframe');
            iframe.src = gameUrl;
            iframe.style.width = "100vw";
            iframe.style.height = "100vh";
            iframe.style.border = "none";
            
            document.body.appendChild(iframe);
            document.title = "Local_Resource_Index.pdf";
        };
    } else {
        console.error("Error: Could not find the secret-trigger element.");
    }
};

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") {
        location.reload();
    }
};
