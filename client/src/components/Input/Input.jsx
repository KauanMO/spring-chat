import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, styleClass, handleOnChange, children, handleOnKeyDown, name }) => {
    return (
        <div className={styles.container}>
            <input name={name} id={name} onChange={handleOnChange} onKeyDown={handleOnKeyDown} placeholder={label} className={`${styles[styleClass]} ${styles.input}`} type={type} />
            {children}
        </div>
    );
}