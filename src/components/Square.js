import { useState } from 'react';
import css from '../styles/Square.module.scss';

const Square = ({id, player, changePlayer}) => {
    const [disabled,setDisabled] = useState(false);
    const [symbol,setSymbol] = useState("");

    const onClickHandler = event => {
        setDisabled(true);
        setSymbol(player);
        changePlayer();
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
            disabled={disabled} >
            <span className={`${css.Symbol} ${renderSymbol(symbol)}`}>{symbol}</span>
        </button>
    )
}

export default Square;