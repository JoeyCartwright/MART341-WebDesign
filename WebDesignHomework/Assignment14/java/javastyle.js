const canvas = document.getElementById('musicCanvas');
const ctx = canvas.getContext('2d');

// I had ChatGPT help with drawing a music note. I simply do not have the skills to draw one myself haha.

// Draw the note's head (a filled oval)
ctx.beginPath();
ctx.ellipse(100, 120, 20, 15, 0, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();

// Draw the note's stem (a vertical line)
ctx.beginPath();
ctx.moveTo(110, 120);
ctx.lineTo(110, 50);
ctx.lineWidth = 4;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

// Draw the flag (a curved line)
ctx.beginPath();
ctx.moveTo(110, 50);
ctx.quadraticCurveTo(130, 70, 110, 90);
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();