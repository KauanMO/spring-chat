import React from "react";
import styles from './Input.module.css'

export const Input = ({ type, label, styleClass, handleOnChange, children, handleOnKeyDown, name, handleOnInput, placeholder }) => {
    return (
        <div className={styles.container}>
            {label
                ? <label className={styles[styleClass]}>{label}</label>
                : ''
            }

            <input onInput={handleOnInput} name={name} id={name} onChange={handleOnChange} onKeyDown={handleOnKeyDown} placeholder={placeholder} className={`${styles[styleClass]} ${styles.input}`} type={type} />
            {children}
        </div>
    );
}