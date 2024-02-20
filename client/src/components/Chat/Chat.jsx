import { AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import styles from './Chat.module.css'
import { Input } from "../Input/Input";

export const Chat = ({ stompClient, messages }) => {
    const [message, setMessage] = useState('');

    const sendMessage = e => {
        try {
            stompClient.send('/app/sendMessage', {}, JSON.stringify({
                message,
                user: {
                    userid: sessionStorage.getItem('id'),
                    username: sessionStorage.getItem('username')
                }
            }));

            setMessage('');
            document.querySelector('#chat_message').value = '';
        } catch (e) {
            console.log(e);
        }
    }

    const Message = ({ m }) => {
        return (
            <div>
                <span className={m.user.userid === sessionStorage.getItem('id')
                    ? styles.my_message
                    : styles.other_message}>
                    {m.message}
                </span>
            </div>
        )
    }

    return (
        <div className={styles.container}>

        </div>
    );
}