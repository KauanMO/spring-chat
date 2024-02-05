import React from "react";
import styles from './Button.module.css'

export const Button = ({ label, styleClass, handleOnClick, name }) => {
    return (
        <>
            <button name={name} id={name} onClick={handleOnClick} className={`${styles.button} ${styles[styleClass]}`}>{label}</button>
        </>
    );
}