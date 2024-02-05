import React from "react";
import styles from './Text.module.css'

export const ClickableText = ({ text, color, fontSize, handleOnClick, name }) => {
    return <span id={name} onClick={handleOnClick} className={styles.clickableText} style={{ color, fontSize }}>{text}</span>
}