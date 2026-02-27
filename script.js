window.onload = function() {
    const mathTrigger = document.getElementById('secret-math');
    const readingTrigger = document.getElementById('secret-reading');
    
    const games = [
        { title: "1v1.LOL", url: "https://1v1.lol/" },
        { title: "Bloxd.io", url: "https://bloxd.io/" },
        { title: "ZombsRoyale", url: "https://zombsroyale.io/" },
        { title: "Shell Shockers", url: "https://shellshock.io/" },
        { title: "Retro Bowl", url: "https://retro-bowl.github.io/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" },
        { title: "BitLife", url: "https://bitlifeonline.io/" },
        { title: "Moto X3M", url: "https://moto-x3m.github.io/" },
        { title: "Paper.io 2", url: "https://paper-io.com/" },
        { title: "Run 3", url: "https://lekugames.github.io/run-3/" }
        // ... (Add your other 40+ games here following the same format)
    ];

    function openPortal() {
        document.body.innerHTML = '';
        document.body.style.background = "white";
        document.body.style.fontFamily = "sans-serif";
        document.body.style.padding = "40px";

        // THE FAKE 404 PAGE (Locked)
        document.body.innerHTML = `
            <div style="max-width: 800px; margin: auto;">
                <h1 style="font-size: 50px; color: #333; margin-bottom: 5px;">404.</h1>
                <p style="font-size: 18px; color: #666;"><b>The requested URL was not found on this server.</b></p>
                <p style="font-size: 14px; color: #999;">Error_Code: 0x800404_G5_STU</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                
                <div id="locked-zone" style="color: #eee; font-size: 10px;">
                    Server Status: Offline (Waiting for secure handshake...)
                </div>

                <div id="hidden-menu" style="display: none;"> 
                    <p style="color: #bbb; font-size: 11px; margin-bottom: 10px;">Authenticated_Resources_v.52</p>
                    <div id="game-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;"></div>
                </div>
            </div>
        `;

        // PASSWORD LOGIC
        let inputString = "";
        const password = "play"; // <--- CHANGE YOUR PASSWORD HERE

        window.onkeydown = function(e) {
            // Panic Key: If you hit Esc, go back to math
            if (e.key === "Escape") { window.location.reload(); return; }

            // Add the key pressed to our secret string
            inputString += e.key.toLowerCase();
            
            // If the last 4 letters typed match "play"
            if (inputString.includes(password)) {
                document.getElementById('locked-zone').style.display = 'none';
                document.getElementById('hidden-menu').style.display = 'block';
                renderGrid();
            }
        };
    }

    function renderGrid() {
        const grid = document.getElementById('game-grid');
        grid.innerHTML = '';
        games.forEach(game => {
            const btn = document.createElement('div');
            btn.style.cssText = "padding:8px; border:1px solid #f0f0f0; cursor:pointer; font-size: 10px; color: #888; text-align:center; background:#fafafa; border-radius:4px; overflow:hidden;";
            btn.innerText = game.title;
            btn.onclick = () => launchGame(game.url);
            grid.appendChild(btn);
        });
    }

    function launchGame(url) {
        document.body.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;";
        document.body.appendChild(iframe);
        document.title = "Grade_5_Worksheet_04.pdf"; 
    }

    if(mathTrigger) mathTrigger.onclick = openPortal;
    if(readingTrigger) readingTrigger.onclick = openPortal;
};
