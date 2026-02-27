window.onload = function() {
    const secretTrigger = document.getElementById('secret-trigger');
    const mathPage = document.getElementById('math-page');
    
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://game316046.konggames.com/gamepro/316046/2/index.html" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" }
    ];

    if (secretTrigger) {
        secretTrigger.onclick = function() {
            // 1. COMPLETELY REMOVE THE MATH PAGE
            mathPage.remove(); 
            
            // 2. Setup the Game Selection Screen
            document.body.style.background = "#0b0e14";
            document.body.innerHTML = `
                <div style="padding:40px; color:white; font-family:sans-serif;">
                    <h2 style="text-align:center;">Resource Portal</h2>
                    <div id="grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr)); gap:15px;"></div>
                </div>
            `;

            const grid = document.getElementById('grid');

            // 3. Create the buttons
            games.forEach(game => {
                const card = document.createElement('div');
                card.style.cssText = "background:#1c2331; padding:20px; border-radius:8px; text-align:center; cursor:pointer; border:1px solid #2d3748;";
                card.innerHTML = `<strong>${game.title}</strong>`;
                
                card.onclick = function() {
                    loadGame(game.url);
                };
                grid.appendChild(card);
            });
        };
    }
};

function loadGame(url) {
    document.body.innerHTML = '';
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;";
    document.body.appendChild(frame);
    document.title = "Local_Resource_Index.pdf";
}

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { location.reload(); }
};
