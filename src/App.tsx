import React, {useEffect, useState} from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import { Colors } from './models/Colors';
import { Player } from './models/Player';

const App = () => {

  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])



  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
 <div>
 
    <div className="app">
 
<BoardComponent
board={board}
setBoard={setBoard}
currentPlayer={currentPlayer}
swapPlayer={swapPlayer}
/>

    </div>
 </div>
  );
};

export default App;
