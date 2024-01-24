import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, styleClass, handleOnChange, children, handleOnKeyDown }) => {
    return (
        <div className={styles.container}>
            <input onChange={handleOnChange} onKeyDown={handleOnKeyDown} placeholder={label} className={`${styles[styleClass]} ${styles.input}`} type={type} />
            {children}
        </div>
    );
}