import css from '../styles/Scores.module.scss';

const Scores = ({scoreX, scoreO}) => {
    return (
        <div className={css.Scores}>
            <div className={css.Player}>
                Player X
            </div>
            <div className={css.Score}>
                {scoreX} - {scoreO}
            </div>
            <div className={css.Player}>
                Player O
            </div>
        </div>
    )
}

export default Scores;