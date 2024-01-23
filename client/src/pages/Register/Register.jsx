import React from "react";
import styles from './Register.module.css';
import { RegisterForm } from "../../components/Register/Register";

export const Register = () => {
    return (
        <div className={styles.container}>
            <RegisterForm />
        </div>
    );
}