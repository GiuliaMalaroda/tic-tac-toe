import { useState } from 'react';
import Scores from './components/Scores';
import Board from './components/Board';
import Square from './components/Square';
import Status from './components/Status';

const WINNING_TERNS = [
    [1,2,3], [4,5,6], [7,8,9], // horizontal
    [1,4,7], [2,5,8], [3,6,9], // vertical
    [1,5,9], [3,5,7]           // diagnoal
];

function isSubset(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    let i = 0;
    let j = 0;

    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++)
            if (arr2[i] === arr1[j])
                break;

        if (j === m)
            return false;
    }

    return true;
}

const App = () => {
    const [player,setPlayer] = useState('X');
    const [scores,setScores] = useState({X: 0, O: 0});
    const [squaresX,setSquaresX] = useState([]);
    const [squaresO,setSquaresO] = useState([]);
    const [hasWinner,setHasWinner] = useState(false);
    const [isTie,setIsTie] = useState(false);
    const [moves,setMoves] = useState(0);

    const updatePlayer = player => {
        if (player === "X") {
            setPlayer("O");
        } else {
            setPlayer("X");
        }
    }

    const updateScores = player => {
        let shallowScores = {...scores};
        shallowScores[player]++;
        setScores(shallowScores);
    }

    const checkForWin = (squares) => {
        let result;

        for (let i = 0; i < WINNING_TERNS.length; i++) {
            if (isSubset(squares,WINNING_TERNS[i])) {
                result = true;
                break;
            } else {
                result = false;
            }
        };

        return result;
    }

    const onUpdate = id => {
        let squares;

        let shallowMoves = moves + 1;
        setMoves(shallowMoves);

        if (player === "X") {
            let shallowSquaresX = [...squaresX];
            shallowSquaresX.push(id);
            setSquaresX(shallowSquaresX);

            squares = shallowSquaresX;
        } else {
            let shallowSquaresO = [...squaresO];
            shallowSquaresO.push(id);
            setSquaresO(shallowSquaresO);

            squares = shallowSquaresO;
        }

        if (checkForWin(squares)) {
            setHasWinner(true);
            updateScores(player);
        } else {
            if (shallowMoves < 9) {
                updatePlayer(player);
            } else {
                setIsTie(true);
            }
            
        };
    }

    const renderSquares = howMany => {
        const squares = [];

        for (let i = 1; i <= howMany; i++) {
            let square = (
                <Square 
                    key={i}
                    id={i}
                    player={player}
                    onUpdate={() => onUpdate(i)}
                    hasWinner={hasWinner} />
            );

            squares.push(square);
        }

        return squares;
    }

    return (
        <div className="wrapper">
            <Scores  
                scoreX={scores.X} 
                scoreO={scores.O} />

            <Board>
                {renderSquares(9)}
            </Board>   

            <Status 
                player={player}
                hasWinner={hasWinner}
                isTie={isTie} />        
        </div>
    )
}

export default App;