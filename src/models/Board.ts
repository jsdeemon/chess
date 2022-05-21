import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";
import { Pawn } from './figures/Pawn';
import { King } from "./figures/King";
import { Rook } from "./figures/Rook";
import { Bishop } from "./figures/Bishop";
import { Knight } from "./figures/Knight";


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
        for (let i = 0; i < 8; i++) {
          new Pawn(Colors.BLACK, this.getCell(i, 1))
          new Pawn(Colors.WHITE, this.getCell(i, 6))
            
        }
    }

    private addKings() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))
    }

    private addRooks() {
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(7, 7))
        new Rook(Colors.WHITE, this.getCell(0, 7))
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
    }

    private addKnights() {
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
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