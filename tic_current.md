

------------------------------------------------------------

                    <div className={styles.gameBoard}>
                        <Board
                            squares={current}
                            onClick={(i: number) => handleClick(i)}
                            size={boardSize}
                        />
                    </div>
