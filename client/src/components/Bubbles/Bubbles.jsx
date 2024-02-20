import React, { useState } from "react";
import styles from './Bubbles.module.css';
import { getRandomIntNumber } from "../../utils";

const Bubble = ({ bbWidth, bbSrc, bbAnimationDuration, bbAnimation, bbRight }) => {
    return <img
        width={`${bbWidth}%`}
        className={styles.bubble}
        src={`./assets/bubble_${bbSrc}.svg`}
        style={{
            right: `${bbRight}%`,
            animation: `${styles[`bubble_animation_${bbAnimation}`]} ${bbAnimationDuration}s forwards ease-in`
        }}
        alt="bubble" ></img >;
}

export const Bubbles = () => {
    const [liveBubbles, setLiveBubbles] = useState([]);

    setTimeout(() => {
        if (liveBubbles.length > 10) {
            setLiveBubbles(oldLiveBubbles => {
                return oldLiveBubbles.splice(0, oldLiveBubbles.length / 2);
            });
        }

        setLiveBubbles(oldLiveBubbles =>
            [...oldLiveBubbles, {
                bbWidth: getRandomIntNumber(4, 2),
                bbSrc: getRandomIntNumber(2, 1),
                bbAnimationDuration: getRandomIntNumber(6, 3),
                bbAnimation: getRandomIntNumber(2, 1),
                bbRight: getRandomIntNumber(100)
            }]
        );
    }, 5000);

    return (
        <div className={styles.container}>
            {liveBubbles.map(liveBubble => {
                return <Bubble bbRight={liveBubble.bbRight} bbSrc={liveBubble.bbSrc} bbWidth={liveBubble.bbWidth} bbAnimation={liveBubble.bbAnimation} bbAnimationDuration={liveBubble.bbAnimationDuration} key={liveBubble.key} />
            })}
        </div>
    );
}