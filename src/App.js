import { useState } from 'react';
import Board from './components/Board';
import Square from './components/Square';

const PLAYERS = ["X","O"];

const App = () => {
    const [player,setPlayer] = useState('X');

    const changePlayer = player => {
        if (player === "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    }

    const renderSquares = howMany => {
        const squares = [];

        for (let i = 1; i <= howMany; i++) {
            let square = (
                <Square 
                    key={i}
                    id={i}
                    player={player}
                    changePlayer={() => changePlayer(player)} />
            );

            squares.push(square);
        }

        return squares;
    }

    return (
        <div className="wrapper">
            {player}
            <Board>
                {renderSquares(9)}
            </Board>
        </div>
    )
}

export default App;