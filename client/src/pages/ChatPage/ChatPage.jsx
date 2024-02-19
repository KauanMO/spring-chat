import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import styles from './ChatPage.module.css'
import { Chat } from "../../components/Chat/Chat";
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client'

export const ChatPage = () => {
    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('id')) {
            navigate('/');
        }

        var socket = new SockJS('http://localhost:8080/ws-messages');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            setStompClient(stompClient);

            stompClient.subscribe('/topic/messages', message => {
                const newMessage = JSON.parse(message.body);

                setMessages(oldMessages => [...oldMessages, newMessage.body.data]);
            });
        });

        return () => {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
        };
    }, [navigate]);

    return (
        <div className={styles.container}>
            <Chat stompClient={stompClient} messages={messages} />
        </div>
    );
}