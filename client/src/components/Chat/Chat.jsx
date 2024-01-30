import { AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import styles from './Chat.module.css'
import { Input } from "../Input/Input";

export const Chat = () => {
    const [message, setMessage] = useState('');

    const SubmitButton = () => {
        return <div onClick={sendMessage} className={styles.submit_button}>
            <AiFillCaretRight />
        </div>
    }

    const typingMessage = e => {
        if (e.key === 'Enter') {
            sendMessage();
        }

        setMessage(e.target.value);
    }

    const sendMessage = e => {
        try {
            fetch('http://localhost:8080/message', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    message,
                    user: {
                        userid: sessionStorage.getItem('id')
                    }
                })
            });

            setMessage('');
            document.querySelector('#chat_message').value = '';
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.chat_message}>
                <Input name={'chat_message'} type={'text'} handleOnKeyDown={typingMessage} label={'Digite uma mensagem'} styleClass={'chat_message'} submitButton={true}>
                    <SubmitButton />
                </Input>
            </div>
        </div>
    );
}