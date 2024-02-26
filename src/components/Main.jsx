import React, {useState} from 'react';
import Smile from "./Smile.jsx";
import data from "../data/array.json";
import styles from './Main.module.scss';

function Main() {
    const smiles = data.emojis;
    const [winner, setWinner] = useState({
        smile: null,
        counter: 0
    })
    const [showWinner, setShowWinner] = useState(false);

    const handleWinner = (smile, counter) => {
        if (winner.counter < counter) {
            setWinner({
                smile: smile,
                counter: counter
            });
        }
        console.log(`${smile} and ${counter}`);
    }

    const handleShowWinner = () => {
        setShowWinner(true);
    }

    return (
        <div className={styles.main}>
            <div className={styles.winnerWrap}>
                <button onClick={handleShowWinner}>Show Winner</button>
                {showWinner && winner.counter === 0 &&
                    <div>No winners yet</div>
                }
                {showWinner && winner.counter > 0 &&
                    <div className={styles.winner}>
                        <p>{winner.smile}</p>
                        <p>{winner.counter}</p>
                    </div>
                }
            </div>
            <div className={styles.smilesWrap}>
                {smiles.map((smile, index) =>
                    <Smile key={index} smile={smile} handleWinner={handleWinner} />
                )}
            </div>
        </div>
    );
}

export default Main;