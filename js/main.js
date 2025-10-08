
if (window.innerWidth > 768) { // adjust breakpoint as needed
    const cursorCanvas = document.createElement("canvas");
    cursorCanvas.id = "curs_canv";
    document.body.appendChild(cursorCanvas);

    // Now initialize your MouseTrail on it
    const trail = new MouseTrail('curs_canv', { color: "#8fc4f0ff" });
    // Example of calling it from another effect's mouse event
window.addEventListener('mousemove', e => {
  trail.addPoint(e.clientX, e.clientY);
});

// Animation loop (can combine with other effects)
function animateAll() {
  trail.update();
  // call other effect updates here if needed
  requestAnimationFrame(animateAll);
}
animateAll();
}
//const trail = new MouseTrail('curs_canv',options = {color: "#8fc4f0ff"});

