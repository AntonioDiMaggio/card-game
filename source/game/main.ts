
// 0. Random player is chosen to start.

// 1. Deck gets created with 110 cards.

// 2. Deck is Shuffled.

// 3. Each player gets 10 cards from the deck.

// 4. Top card of deck is flipped and placed besides deck to start a discard pile.

// 5. Each player can view their own cards.

// 6. Player starts round by drawing from either the discard pile or the deck.

// 7. If player has not laid phase down, then they determine if they can lay their phase down.

// 8. If the player's phase is laid down, then cards from players' hand that meet phase criteria of any laid down phases are laid down.

// 9. Player ends turn by discarding a card.

// 10. If the card that is discarded is the last card of the player then the round ends and all players who laid their phase down move on to the next phase, everyone else restarts the phase they were last on. Go back to 1.

// 11. Player to the left begins turn. Go to 6.

function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]; // Create a new array to avoid modifying the original array
  
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
  
    return newArray;
  }

let players: {}[] = [];
for(let i = 0; i < 6; i++)
{
    let player = {"hand": [], "phase": 1};
    players.push(player);
}

console.log(players);

let deck: {}[] = [];
for(let i = 0; i < 96; i++)
{
    let numberedCard = {number: (i % 12) + 1, color: Math.floor(4 * i / 96), isWild: false, isSkip: false};
    deck.push(numberedCard);
}
for(let i = 0; i < 8; i++)
{
    let wildCard = {number: null, color: null, isWild: true, isSkip: false};
    deck.push(wildCard);
}for(let i = 0; i < 4; i++)
{
    let skipCard = {number: null, color: null, isWild: false, isSkip: true};
    deck.push(skipCard);
}

deck = shuffleArray(deck);
let discardPile: {}[] = [];
let card = deck.pop();
discardPile.push(card!);

let hasWinner: boolean = false;
let startPlayer: number = Math.floor(6 * Math.random());
let currentPlayer: number = startPlayer;

while(true)
{
    
    if(players[currentPlayer]["hand"].length === 0 && players[currentPlayer]["phase"] === 10)
        break;

    currentPlayer = (currentPlayer + 1) % players.length;
}