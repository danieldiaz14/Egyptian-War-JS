const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const background = document.getElementById('background');
const p1Rect = document.getElementById('p1Rect');
const p2Rect = document.getElementById('p2Rect');
context.font = "25px Arial";
const cards = {
    spade: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    club: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    diamond: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    heart: [1,2,3,4,5,6,7,8,9,10,11,12,13]
};

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
const createDeck = () => {
    let data = [];
    for (let i = 0; i < 13; i++) {
        data.push(cards.spade.shift());
        data.push(cards.club.shift());
        data.push(cards.diamond.shift());
        data.push(cards.heart.shift());
    }
    return data;
}

let deck = createDeck();
let queue = [];
const draw = () => {
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.drawImage(p1Rect, 795, 0, 225, 40);
    context.fillText(`Player2's hand:${players.player2.hand.length}`, 800, 30);
    context.drawImage(p1Rect, 0, 600, 225,40);
    context.fillText(`Player1's hand:${players.player1.hand.length}`, 0, 630);
    requestAnimationFrame(draw);
}

draw();