const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
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

const checkQueue = (data) => {
    for (let i = 0; i < data.length; i++) {

    }
}
const draw = () => {
    context.fillStyle = "#32CD32";
    context.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);
}

draw();