import React from "react";
import styles from './Button.module.css'

export const Button = ({ label, styleClass, handleOnClick }) => {
    return (
        <>
            <button onClick={handleOnClick} className={`${styles.button} ${styles[styleClass]}`}>{label}</button>
        </>
    );
}