import { Card } from "./card";

class Deck
{
    private cards: Card[];
    private upSideDown: boolean;

    Deck()
    {
        
    }

    add(card: Card)
    {
        this.cards.push(card);
    }

    shuffle()
    {

    }

    reset()
    {

    }
}