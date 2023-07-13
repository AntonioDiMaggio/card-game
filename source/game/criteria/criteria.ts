import { Hand } from "../hand"

export interface Criteria
{
    passes(hand: Hand): boolean;
}