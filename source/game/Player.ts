import { Criteria } from "./criteria/criteria";
import { Hand } from "./hand";

class Player
{
    hand: Hand;
    currentPhaseCriteria: Criteria;
    phase = 1;

    Player(criteria: Criteria)
    {
        this.hand = new Hand();
    }

    setCriteria(criteria: Criteria)
    {
        this.currentPhaseCriteria = criteria;
    }
}