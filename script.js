const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let mouseX = 0;
    let mouseY = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < canvas.width; x += 20) {
      for (let y = 0; y < canvas.height; y += 20) {
        let dx = mouseX - x;
        let dy = mouseY - y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let angle = Math.atan2(dy, dx);
        let magnitude = Math.min(30 / (distance + 1), 2);
        
        let endX = x + Math.cos(angle) * magnitude * 20;
        let endY = y + Math.sin(angle) * magnitude * 20;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';        ctx.lineWidth = 1;
        ctx.stroke();
        }
    }

    requestAnimationFrame(draw);
}

draw();