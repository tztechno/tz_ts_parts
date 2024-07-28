
const handleSizeChange = (newSize: number) => {
        setBoardSize(newSize);
        setHistory([Array(newSize * newSize).fill(null)]);
        setStepNumber(0);
        setXIsNext(true);
    };
