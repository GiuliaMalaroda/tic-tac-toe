import css from '../styles/Board.module.scss';

const Square = props => {
    return (
        <div className={css.Board}>
            {props.children}
        </div>
    )
}

export default Square;