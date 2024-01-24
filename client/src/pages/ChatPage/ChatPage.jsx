import React from "react";
import { useNavigate } from 'react-router-dom'
import styles from './ChatPage.module.css'
import { Chat } from "../../components/Chat/Chat";

export const ChatPage = () => {
    const navigate = useNavigate();

    function verifyLogin() {
        if (!sessionStorage.getItem('id')) {
            navigate('/');
        }
    }

    return (
        <div className={styles.container} onMouseEnter={verifyLogin}>
            <Chat />
        </div>
    );
}