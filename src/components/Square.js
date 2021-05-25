import { useState } from 'react';
import css from '../styles/Square.module.scss';

const Square = ({id, player, onUpdate, hasWinner, isRestarted}) => {
    const [disabled,setDisabled] = useState(false);
    const [symbol,setSymbol] = useState("");

    const onClickHandler = event => {
        setDisabled(true);
        setSymbol(player);
        onUpdate();
    }

    const renderSymbol = symbol => {
        if (symbol) {
            return css[`Symbol_${symbol}`]
        }
    }

    return (
        <button 
            id={id}
            className={css.Square}
            onClick={onClickHandler} 
            disabled={hasWinner ? true : disabled} >
            <span className={`${css.Symbol} ${renderSymbol(symbol)}`}>{symbol}</span>
        </button>
    )
}

export default Square;