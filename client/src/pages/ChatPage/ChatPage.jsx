import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import styles from './ChatPage.module.css'
import { Chat } from "../../components/Chat/Chat";
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client'

export const ChatPage = () => {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        var socket = new SockJS('http://localhost:8080/ws-messages');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            setStompClient(stompClient);

            stompClient.subscribe('/topic/messages', message => {
                const newMessage = JSON.parse(message.body);
                console.log(newMessage);
                // setMessages((prevMessages) => [...prevMessages, newMessage]);
            });
        });

        return () => {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
        };
    }, []);

    const navigate = useNavigate();

    function verifyLogin() {
        if (!sessionStorage.getItem('id')) {
            navigate('/');
        }
    }

    return (
        <div className={styles.container} onMouseEnter={verifyLogin}>
            <Chat stompClient={stompClient} />
        </div>
    );
}