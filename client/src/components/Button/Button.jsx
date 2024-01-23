import React from "react";
import styles from './Button.module.css'

export const Button = ({ label, style, handleOnClick }) => {
    return (
        <>
            <button onClick={handleOnClick} className={`${styles.button} ${styles[style]}`}>{label}</button>
        </>
    );
}