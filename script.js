body { font-family: 'Times New Roman', serif; margin: 0; background: #fdfdfd; color: #222; }
nav { background: #1a5f7a; color: white; padding: 12px 30px; font-weight: bold; }
.content { max-width: 700px; margin: 60px auto; padding: 20px; border-left: 3px solid #eee; }
.math-box { background: #fff; border: 1px solid #ddd; padding: 30px; text-align: center; font-size: 1.4rem; margin: 25px 0; border-radius: 4px; }
#secret-trigger { cursor: text; border-bottom: 1px dashed transparent; }
.hidden { display: none !important; }

/* Hidden Game Hub */
#game-page { background: #0b0e14; min-height: 100vh; padding: 40px; color: white; font-family: sans-serif; }
.game-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px; }
.card { background: #1c2331; padding: 15px; border-radius: 8px; text-align: center; cursor: pointer; transition: 0.2s; border: 1px solid #2d3748; }
.card:hover { border-color: #38bdf8; background: #252f44; }

/* Overlay */
#overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 9999; }
#game-player { width: 100%; height: 100%; }
#panic-bar { position: absolute; top: 0; right: 0; background: rgba(0,0,0,0.5); color: #444; padding: 5px; font-size: 10px; pointer-events: none; }
const secretTrigger = document.getElementById('secret-trigger');

// The game you want to play
const gameUrl = "https://chvin.github.io/react-tetris/"; 

secretTrigger.onclick = function() {
    // 1. Open a new blank tab
    let win = window.open();
    
    // 2. Set the URL of the new tab to "about:blank"
    win.location.href = "about:blank";

    // 3. Create an iframe inside that blank tab that fills the whole screen
    let iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    
    // 4. Point the iframe to your game
    iframe.src = gameUrl;

    // 5. Put the iframe into the blank page
    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    win.document.body.appendChild(iframe);
};
