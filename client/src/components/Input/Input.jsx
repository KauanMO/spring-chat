import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, style, handleOnChange }) => {
    return (
        <div className={styles.container}>
            <input onChange={handleOnChange} placeholder={label} className={styles[style]} type={type}></input>
        </div>
    );
}