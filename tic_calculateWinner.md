

    const calculateWinner = (squares: SquareValue[]): SquareValue => {
        const lines = [];
        // 横のライン
        for (let i = 0; i < boardSize; i++) {
            lines.push(Array(boardSize).fill(0).map((_, j) => i * boardSize + j));
        }
        // 縦のライン
        for (let i = 0; i < boardSize; i++) {
            lines.push(Array(boardSize).fill(0).map((_, j) => j * boardSize + i));
        }
        // 対角線
        lines.push(Array(boardSize).fill(0).map((_, i) => i * boardSize + i));
        lines.push(Array(boardSize).fill(0).map((_, i) => i * boardSize + (boardSize - 1 - i)));

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.every(index => squares[index] && squares[index] === squares[line[0]])) {
                return squares[line[0]];
            }
        }
        return null;
    };

    --------------------------------------------------------------------------------------------

            if (calculateWinner(squares) || squares[i]) {
            return;
        }

    ----------------------------------------------------------------------------------------------

        const winner = calculateWinner(current);

    ----------------------------------------------------------------------------------------------




    
