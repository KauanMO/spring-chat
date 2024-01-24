import { AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import styles from './Chat.module.css'
import { Input } from "../Input/Input";

export const Chat = () => {
    const [message, setMessage] = useState('');

    const SubmitButton = () => {
        return <div className={styles.submit_button}>
            <AiFillCaretRight />
        </div>
    }

    const typingMessage = e => {
        if (e.key === 'Enter') {
            sendMessage();
        }

        setMessage(e.target.value);
    }

    const sendMessage = () => {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.chat_message}>
                <Input type={'text'} handleOnKeyDown={typingMessage} label={'Digite uma mensagem'} styleClass={'chat_message'} submitButton={true}>
                    <SubmitButton />
                </Input>
            </div>
        </div>
    );
}