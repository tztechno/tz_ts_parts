
const handleSizeChange = (newSize: number) => {
        setBoardSize(newSize);
        setHistory([Array(newSize * newSize).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
    };

--------------------------------------------------------------------------------
        
                <div>
                    <label>
                        Board Size:
                        <select value={boardSize} onChange={(e) => handleSizeChange(Number(e.target.value))}>
                            <option value="3">3x3</option>
                            <option value="4">4x4</option>
                            <option value="5">5x5</option>
                        </select>
                    </label>
                </div>
