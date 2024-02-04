import React from "react";
import { Login } from "../../components/LoginRegister/LoginRegister";
import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className={styles.container}>
            <Login />
        </div>
    );
}