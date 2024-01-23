import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, styleClass, handleOnChange }) => {
    return (
        <div className={styles.container}>
            <input onChange={handleOnChange} placeholder={label} className={styles[styleClass]} type={type}></input>
        </div>
    );
}