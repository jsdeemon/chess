import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";

export class Board {
    cells: Cell[][] = [] 

    public initCells() {
        for (let i = 0; i < 8; i++) {
           const row: Cell[] = []

           for (let j = 0; j < 8; j++) {
               if ((i + j) % 2 !== 0) {
                   row.push(new Cell(this, j, i, Colors.BLACK, null)) // black cells
               } else {
                   row.push(new Cell(this, j, i, Colors.WHITE, null)) // white cells
               }
           }
           this.cells.push(row) // adding row
        }
    }


    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    /*
    --------------------
    adding figures on the board
    --------------------
    */

    private addPawns() {

    }

    private addKings() {
        
    }

    private addQueens() {
        
    }

    private addRooks() {
        
    }

    private addBishops() {
        
    }

    private addKnights() {
        
    }

    public addFigures() {
        this.addPawns();
        this.addKings();
        this.addBishops();
        this.addRooks();
        this.addQueens();
        this.addKnights();
      
    }
}