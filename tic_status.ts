

    let status: string;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (current.every(square => square !== null)) {
        status = 'Draw';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

---------------------------------------------------------------------------

                    <div className={styles.gameInfo}>
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
