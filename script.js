window.onload = function() {
    const secretTrigger = document.getElementById('secret-trigger');
    
    // Add your game links here!
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://game316046.konggames.com/gamepro/316046/2/index.html" },
        { title: "Minecraft Classic", url: "https://classic.minecraft.net/" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" }
    ];

    if (secretTrigger) {
        secretTrigger.onclick = function() {
            // 1. Wipe math and setup the menu screen
            document.body.innerHTML = `
                <div id="portal-bg" style="background:#0b0e14; color:white; min-height:100vh; padding:40px; font-family:sans-serif;">
                    <h2 style="text-align:center; color:#38bdf8;">Resource Portal</h2>
                    <div id="menu-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:20px; max-width:800px; margin:0 auto;"></div>
                </div>
            `;
            
            const grid = document.getElementById('menu-grid');

            // 2. Create a button for each game
            games.forEach(game => {
                const btn = document.createElement('div');
                btn.style.cssText = "background:#1c2331; padding:20px; border-radius:10px; text-align:center; cursor:pointer; border:1px solid #2d3748;";
                btn.innerHTML = `<strong>${game.title}</strong>`;
                
                // 3. When a game is clicked, launch the Iframe
                btn.onclick = function() {
                    launchGame(game.url);
                };
                grid.appendChild(btn);
            });
        };
    }
};

function launchGame(url) {
    document.body.innerHTML = '';
    document.body.style.overflow = "hidden";
    
    let iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;";
    
    document.body.appendChild(iframe);
    document.title = "Local_Resource_Index.pdf";
}

// PANIC KEY: ESC (Returns to Math)
window.onkeydown = function(e) {
    if (e.key === "Escape") {
        location.reload();
    }
};
