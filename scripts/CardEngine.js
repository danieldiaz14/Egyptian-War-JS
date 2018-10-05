const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const background = document.getElementById('background');
const p1Rect = document.getElementById('p1Rect');
const p2Rect = document.getElementById('p2Rect');
context.font = "25px Arial";
const cardImages = document.getElementById('cards');
let players = {
    player1: {
        currentcards: 0,
        turn: false,
        hand: [],
    },
    player2: {
        currentcards: 0,
        turn: false,
        hand: [],
    }
}

const drawCard = (startX, startY) => {context.drawImage(cardImages, startX, startY, 66, 95, 390, 250, 130, 130)}
let queue = [];
const draw = () => {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.drawImage(p1Rect, 795, 0, 225, 40);
    context.fillText(`Player2's hand:${players.player2.hand.length}`, 800, 30);
    context.drawImage(p1Rect, 0, 600, 225,40);
    context.fillText(`Player1's hand:${players.player1.hand.length}`, 0, 630);
    drawCard(deck[0].coordinates[0], deck[0].coordinates[1])
    requestAnimationFrame(draw);
}

draw();