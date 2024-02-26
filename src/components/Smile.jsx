import React, {useState} from 'react';
import styles from './Smile.module.scss';

function Smile(props) {
    const smile = props.smile;
    const handleWinner = props.handleWinner;

    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter((prevCounter) => {
            const newCounter = prevCounter + 1;
            setTimeout(() => handleWinner(smile, newCounter), 0);
            return newCounter;
        })

    }

    return (
        <div className={styles.smile}>
            <span>{smile}</span>
            <span>{counter}</span>
            <button onClick={handleClick}>+</button>
        </div>
    );
}

export default Smile;