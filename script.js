// Scrambled links (Base64)
const m = [
    { n: "L-101", u: "aHR0cHM6Ly9jaHZpbi5naXRodWIuaW8vcmVhY3QtdGV0cmlzLw==" }, // Tetris
    { n: "M-202", u: "aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv" }, // Slope
    { n: "L-303", u: "aHR0cHM6Ly9yZXRyby1ib3dsLmdpdGh1Yi5pby8=" }, // Retro Bowl
    { n: "S-404", u: "aHR0cHM6Ly9ibG94ZC5pby8=" }, // Bloxd.io
    { n: "M-505", u: "aHR0cHM6Ly8xdjEubG9sLw==" }, // 1v1.LOL
    { n: "L-606", u: "aHR0cHM6Ly9iaXRsaWZlb25saW5lLmlvLw==" }, // BitLife
    { n: "P-707", u: "aHR0cHM6Ly9tb3RvLXgzbS5naXRodWIuaW8v" }  // MotoX3M
];

document.addEventListener('click', function (e) {
    if (e.target.id === 'secret-reading') {
        openPortal();
    }
});

function openPortal() {
    document.body.innerHTML = `
        <div style="padding:20px; font-family:sans-serif;">
            <p style="font-weight:bold; color:#444;">Storage Archive > Lesson_Assets</p>
            <div id="g" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;"></div>
            <input type="password" id="p" style="position:fixed; bottom:0; left:0; width:10px; opacity:0.02;">
        </div>
    `;

    const p = document.getElementById('p');
    p.focus();
    p.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            renderModules();
            this.style.display = 'none';
        }
    };
}

function renderModules() {
    const g = document.getElementById('g');
    g.innerHTML = '';
    m.forEach(item => {
        const btn = document.createElement('div');
        btn.style.cssText = "padding:10px; border:1px solid #ddd; cursor:pointer; font-size: 12px; text-align:center; background:#fff;";
        btn.innerText = item.n; 
        btn.onclick = () => {
            const url = atob(item.u);
            // Open in a new blank tab to bypass the "Blocked" iframe screen
            let win = window.open('about:blank', '_blank');
            win.document.body.style.margin = '0';
            let frame = win.document.createElement('iframe');
            frame.style.cssText = "border:none; width:100%; height:100vh;";
            frame.src = url;
            win.document.body.appendChild(frame);
        };
        g.appendChild(btn);
    });
}
