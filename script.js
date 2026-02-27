// Scrambled links to bypass keyword filters
const m = [
    { n: "Module_01", u: "aHR0cHM6Ly9jaHZpbi5naXRodWIuaW8vcmVhY3QtdGV0cmlzLw==" }, // Tetris
    { n: "Module_02", u: "aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv" }, // Slope
    { n: "Module_03", u: "aHR0cHM6Ly9yZXRyby1ib3dsLmdpdGh1Yi5pby8=" }, // Retro Bowl
    { n: "Module_04", u: "aHR0cHM6Ly9ibG94ZC5pby8=" }, // Bloxd.io
    { n: "Module_05", u: "aHR0cHM6Ly8xdjEubG9sLw==" }, // 1v1.LOL
    { n: "Module_06", u: "aHR0cHM6Ly9iaXRsaWZlb25saW5lLmlvLw==" }, // BitLife
    { n: "Module_07", u: "aHR0cHM6Ly9tb3RvLXgzbS5naXRodWIuaW8v" } // Moto X3M
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

    // FAKE DISTRICT MAINTENANCE SCREEN
    document.body.innerHTML = `
        <div style="height: 5px; background: #2c3e50;"></div>
        <div style="max-width: 550px; margin: 100px auto; background: white; padding: 40px; border: 1px solid #ddd; border-radius: 4px;">
            <div style="font-size: 48px;">☁️</div>
            <p style="font-size: 22px; font-weight: bold; color: #333;">Service Error (503)</p>
            <p style="font-size: 14px; color: #666;">The District Resource Server is undergoing maintenance. Try again later.</p>
            <p style="color: #ccc; font-family: monospace; font-size: 11px;">Ref: STU-882-QX</p>
        </div>
        <input type="password" id="p" style="position:fixed; bottom:0; left:0; width:2px; height:2px; opacity:0.1; border:none; outline:none;">
        <div id="g" style="display:none; padding:20px; max-width:900px; margin:auto; grid-template-columns:repeat(4, 1fr); gap:10px;"></div>
    `;

    const p = document.getElementById('p');
    p.focus();
    p.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            document.getElementById('g').style.display = 'grid';
            this.style.display = 'none';
            renderModules();
        }
    };
}

function renderModules() {
    const g = document.getElementById('g');
    m.forEach(item => {
        const d = document.createElement('div');
        d.style.cssText = "padding:15px; border:1px solid #ddd; cursor:pointer; font-size: 11px; color: #999; text-align:center; background:#fff;";
        d.innerText = item.n;
        d.onclick = () => {
            // Decodes the URL and opens it
            const url = atob(item.u);
            document.body.innerHTML = `<iframe src="${url}" style="position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;"></iframe>`;
            document.title = "Grade_5_Worksheet_04.pdf";
        };
        g.appendChild(d);
    });
}

// PANIC KEY: ESC (Wipes history & goes back to math)
window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.replace(window.location.origin + window.location.pathname);
    }
};
