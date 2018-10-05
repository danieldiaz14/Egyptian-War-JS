class Card {
    constructor(type, value, coordinates) {
        this.type = type;
        this.value = value;
        this.coordinates = coordinates;
    }
}
// different between x is coordinate is 102. For y its 120

const fillDeck = () => {
    let deck = [];
    let spaceBetween = 0;
    for (let i = 0; i < 13; i++) {
        const spade = new Card("spade", i, [spaceBetween, 0]);
        const heart = new Card("heart", i, [spaceBetween, 120]);
        const club = new Card("club", i, [spaceBetween, 240]);
        const diamond = new Card("diamond", i, [spaceBetween, 360]);
        deck.push(spade, heart, club, diamond);
        spaceBetween+=102;
    }
    return shuffle(deck);
}

const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i +1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const deck = fillDeck();