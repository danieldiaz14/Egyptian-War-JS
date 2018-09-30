const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

const draw = () => {
    context.fillStyle = "#32CD32";
    context.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);
}

draw();