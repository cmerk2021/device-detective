
var canvas = document.createElement('canvas');
canvas.id = 'myCanvas';
canvas.width = 200;
canvas.height = 40;
canvas.style.border = '1px solid #000000';

// Append the canvas element to the document (optional)

var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255,0,255)";
ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.fill();
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "rgb(0,255,255)";
ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();   
ctx.closePath();

txt = 'abz190#$%^@£éú';
ctx.textBaseline = "top";
ctx.font = '17px "Arial 17"';
ctx.textBaseline = "alphabetic";
ctx.fillStyle = "rgb(255,5,5)";
ctx.rotate(.03);
ctx.fillText(txt, 4, 17);
ctx.fillStyle = "rgb(155,255,5)";
ctx.shadowBlur=8;
ctx.shadowColor="red";
ctx.fillRect(20,12,100,5);

// hashing function
ssrc = canvas.toDataURL();
hash = 0;

for (i = 0; i < src.length; i++) {
    char = src.charCodeAt(i) & 0xFF; // Ensure unsigned value
    hash = ((hash << 5) - hash) + char;
}

const visitorId = hash;
