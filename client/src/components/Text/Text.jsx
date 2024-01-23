import React from "react";
import styles from './Text.module.css'

export const ClickableText = ({ text, color, fontSize }) => {
    return <span className={styles.clickableText} style={{ color, fontSize }}>{text}</span>
}