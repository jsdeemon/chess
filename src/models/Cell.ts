import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";
import { Board } from './Board';

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;  
    board: Board;
    available: boolean; // can move or not
    id: number; // for react keys
}