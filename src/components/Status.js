import css from '../styles/Status.module.scss';

const Status = ({player, hasWinner, isTie}) => {
    let label = !isTie || !hasWinner ? (
        <>Player {player} turn</>
    ) : (
        hasWinner ? (
            <>🏆 <u>Player {player}</u> wins!</>
        ) : (
            <>Tie!</>
        )
    );

    if (isTie) {
        label = <>✊🏼 No winner, <u>it's a tie</u>!</>
    } else if (hasWinner) {
        label = <>🏆 <u>Player {player}</u> wins!</>
    } else {
        <>Player {player} turn</>
    }

    return (
        <div className={css.Status}>
            {label}
        </div>
    )
}

export default Status;