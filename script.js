// Scrambled links to bypass keyword filters (Base64)
const m = [
    { n: "Module_01", u: "aHR0cHM6Ly9jaHZpbi5naXRodWIuaW8vcmVhY3QtdGV0cmlzLw==" }, // Tetris
    { n: "Module_02", u: "aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv" }, // Slope
    { n: "Module_03", u: "aHR0cHM6Ly9yZXRyby1ib3dsLmdpdGh1Yi5pby8=" }, // Retro Bowl
    { n: "Module_04", u: "aHR0cHM6Ly9ibG94ZC5pby8=" }, // Bloxd.io
    { n: "Module_05", u: "aHR0cHM6Ly8xdjEubG9sLw==" }, // 1v1.LOL
    { n: "Module_06", u: "aHR0cHM6Ly9iaXRsaWZlb25saW5lLmlvLw==" }, // BitLife
    { n: "Module_07", u: "aHR0cHM6Ly9tb3RvLXgzbS5naXRodWIuaW8v" }, // Moto X3M
    { n: "Module_08", u: "aHR0cHM6Ly9kcml2ZS1tYWQuZ2l0aHViLmlvLw==" }, // Drive Mad
    { n: "Module_09", u: "aHR0cHM6Ly9zbWFzaGthcnRzLmlvLw==" }, // Smash Karts
    { n: "Module_10", u: "aHR0cHM6Ly9zaGVsbHNob2NrLmlvLw==" }, // Shell Shockers
    { n: "Module_11", u: "aHR0cHM6Ly9rcnVua2VyLmlvLw==" }, // Krunker
    { n: "Module_12", u: "aHR0cHM6Ly96b21ic3JveWFsZS5pby8=" }, // ZombsRoyale
    { n: "Module_13", u: "aHR0cHM6Ly9nZHBzLmlvL3BsYXkv" }, // Geometry Dash
    { n: "Module_14", u: "aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv" }, // Minecraft
    { n: "Module_15", u: "aHR0cHM6Ly9zdGlja21hbi1ob29rLmdpdGh1Yi5pby8=" }, // Stickman Hook
    { n: "Module_16", u: "aHR0cHM6Ly9wYXBlci1pby5jb20v" }, // Paper.io
    { n: "Module_17", u: "aHR0cHM6Ly92ZXg3LmlvLw==" }, // Vex 7
    { n: "Module_18", u: "aHR0cHM6Ly9ldm93b3JsZC5pby8=" }, // EvoWorld
    { n: "Module_19", u: "aHR0cHM6Ly9zdWJ3YXlzdWJ3YXlzLmNvbS8=" }, // Subway Surfers
    { n: "Module_20", u: "aHR0cHM6Ly9mbGFwcHliaXJkLmlvLw==" }, // Flappy Bird
    { n: "Module_21", u: "aHR0cHM6Ly82Njc3LmdpdGh1Yi5pby9jcm9zc3ktcm9hZC8=" }, // Crossy Road
    { n: "Module_22", u: "aHR0cHM6Ly90b3RhbGplcmtmeWNoLmNvbS9oYXBweV93aGVlbHMudGpm" }, // Happy Wheels
    { n: "Module_23", u: "aHR0cHM6Ly9iYXNrZXRicm9zLmlvLw==" }, // Basket Bros
    { n: "Module_24", u: "aHR0cHM6Ly9idXJyaXRvYmlzb24uZ2l0aHViLmlvLw==" }, // Burrito Bison
    { n: "Module_25", u: "aHR0cHM6Ly9saXR0bGVhbGNoZW15LmNvbS8=" }, // Little Alchemy
    { n: "Module_26", u: "aHR0cHM6Ly9hZ2FyLmlvLw==" }, // Agar.io
    { n: "Module_27", u: "aHR0cHM6Ly9zbGl0aGVyLmlvLw==" }, // Slither.io
    { n: "Module_28", u: "aHR0cHM6Ly9kaWVwLmlvLw==" }, // Diep.io
    { n: "Module_29", u: "aHR0cHM6Ly9ob2xlLWlvLmNvbS8=" }, // Hole.io
    { n: "Module_30", u: "aHR0cHM6Ly9yYWZ0d2Fycy5pby8=" }, // Raft Wars
    { n: "Module_31", u: "aHR0cHM6Ly9maXJlYm95LXdhdGVyZ2lybC5pby8=" }, // Fireboy Watergirl
    { n: "Module_32", u: "aHR0cHM6Ly9wYXBhcy1waXp6ZXJpYS5pby8=" }, // Papa's Pizzeria
    { n: "Module_33", u: "aHR0cHM6Ly90ZXJyYXJpYS5vcmcv" }, // Terraria
    { n: "Module_34", u: "aHR0cHM6Ly93d3cudG9tYi1ydW5uZXIuaW8v" }, // Tomb Runner
    { n: "Module_35", u: "aHR0cHM6Ly9wbGF5MjA0OC5jby8=" }, // 2048
    { n: "Module_36", u: "aHR0cHM6Ly9jaGVzcy5jb20v" }, // Chess
    { n: "Module_37", u: "aHR0cHM6Ly9kb29kbGVqdW1wLmlvLw==" }, // Doodle Jump
    { n: "Module_38", u: "aHR0cHM6Ly9za2rib3h5LmdpdGh1Yi5pby8=" }, // Skybox
    { n: "Module_39", u: "aHR0cHM6Ly93ZWJnbC1ib3VsZGVyLmdpdGh1Yi5pby8=" }, // Boulder
    { n: "Module_40", u: "aHR0cHM6Ly9iaXRhY2UuZ2l0aHViLmlvLw==" }, // Bitace
    { n: "Module_41", u: "aHR0cHM6Ly9ib3R0bGVmbGlwLmdpdGh1Yi5pby8=" }, // Bottle Flip
    { n: "Module_42", u: "aHR0cHM6Ly93YXJibG94LmdpdGh1Yi5pby8=" }, // Warblox
    { n: "Module_43", u: "aHR0cHM6Ly9zb25pYy5naXRodWIuaW8v" }, // Sonic
    { n: "Module_44", u: "aHR0cHM6Ly9tYXJpby5naXRodWIuaW8v" }, // Mario
    { n: "Module_45", u: "aHR0cHM6Ly9wb2tlLWNsaWNrZXIuZ2l0aHViLmlvLw==" }, // PokeClicker
    { n: "Module_46", u: "aHR0cHM6Ly9waXhlbC1ndW4uZ2l0aHViLmlvLw==" }, // Pixel Gun
    { n: "Module_47", u: "aHR0cHM6Ly9idWxsZXRzLmdpdGh1Yi5pby8=" }, // Bullets
    { n: "Module_48", u: "aHR0cHM6Ly9vcmJpdC5naXRodWIuaW8v" }, // Orbit
    { n: "Module_49", u: "aHR0cHM6Ly9zbmFrZS5naXRodWIuaW8v" }, // Snake
    { n: "Module_50", u: "aHR0cHM6Ly90dW5uZWwtcnVzaC5naXRodWIuaW8v" } // Tunnel Rush
];

document.addEventListener('click', function (e) {
    if (e.target.id === 'secret-reading' || e.target.id === 'secret-math') {
        openPortal();
    }
});

function openPortal() {
    document.body.innerHTML = '';
    document.body.style.background = "#f4f7f9";
    document.body.style.fontFamily = "sans-serif";

    // DISTRICT ERROR COVER
    document.body.innerHTML = `
        <div style="height: 5px; background: #2c3e50;"></div>
        <div style="max-width: 550px; margin: 80px auto; background: white; padding: 40px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <div style="font-size: 48px; color: #e74c3c;">☁️</div>
            <p style="font-size: 22px; font-weight: bold; color: #333; margin-top: 10px;">Connection Error (503)</p>
            <p style="font-size: 14px; color: #666; line-height: 22px;">
                The District Resource Server is currently undergoing scheduled maintenance. Please check back later.
                <br><br>
                <span style="color: #bbb; font-family: monospace; font-size: 11px;">Error ID: STU-882-QX</span>
            </p>
        </div>
        
        <input type="password" id="p" style="position:fixed; bottom:0; left:0; width:5px; height:5px; opacity:0.1; border:none; outline:none;">
        
        <div id="g" style="display:none; padding:20px; max-width:1000px; margin:auto; grid-template-columns:repeat(5, 1fr); gap:10px;"></div>
    `;

    const p = document.getElementById('p');
    p.focus();
    p.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            document.getElementById('g').style.display = 'grid';
            this.style.display = 'none'; // Remove box
            renderModules();
        }
    };
}

function renderModules() {
    const g = document.getElementById('g');
    g.innerHTML = '';
    m.forEach(item => {
        const btn = document.createElement('div');
        btn.style.cssText = "padding:10px; border:1px solid #ddd; cursor:pointer; font-size: 10px; color: #999; text-align:center; background:#fff; border-radius:4px;";
        btn.innerText = item.n; // Shows "Module_01", "Module_02", etc.
        btn.onclick = () => {
            const url = atob(item.u); // Decrypts the URL
            document.body.innerHTML = `<iframe src="${url}" style="position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;"></iframe>`;
            document.title = "Grade_5_Worksheet_04.pdf";
        };
        g.appendChild(btn);
    });
}

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.replace(window.location.origin + window.location.pathname);
    }
};
