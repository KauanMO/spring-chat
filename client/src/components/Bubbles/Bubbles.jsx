import React, { useState } from "react";
import styles from './Bubbles.module.css';

const Bubble = ({ bbWidth, bbSrc }) => {
    return <img
        width={`${bbWidth}%`}
        className={styles.bubble}
        src={`./assets/bubble_${bbSrc}.svg`}
        style={{ right: `${parseInt(Math.random() * 100)}%` }}
        alt="bubble" ></img >;
}

export const Bubbles = () => {
    const [liveBubbles, setLiveBubbles] = useState([]);

    setTimeout(() => {
        if (liveBubbles.length > 5) {
            setLiveBubbles(oldLiveBubbles => {
                return oldLiveBubbles.splice(0, oldLiveBubbles.length / 2);
            });
        }

        setLiveBubbles(oldLiveBubbles =>
            [...oldLiveBubbles, {
                bbWidth: parseInt(Math.random() * 10 + 2),
                bbSrc: parseInt(Math.random() * 2 + 1)
            }]
        );
    }, 5000);

    return (
        <div className={styles.container}>
            {liveBubbles.map(liveBubble => {
                return <Bubble bbSrc={liveBubble.bbSrc} bbWidth={liveBubble.bbWidth} key={liveBubble.key} />
            })}
        </div>
    );
}