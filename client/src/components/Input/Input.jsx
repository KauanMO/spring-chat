import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, styleClass, handleOnChange, children }) => {
    return (
        <div className={styles.container}>
            <input onChange={handleOnChange} placeholder={label} className={`${styles[styleClass]} ${styles.input}`} type={type} />
            {children}
        </div>
    );
}