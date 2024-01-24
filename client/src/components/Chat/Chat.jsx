import { AiFillCaretRight } from "react-icons/ai";
import React from "react";
import styles from './Chat.module.css'
import { Input } from "../Input/Input";

export const Chat = () => {
    const SubmitButton = () => {
        return <div className={styles.submit_button}>
            <AiFillCaretRight />
        </div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.chat_message}>
                <Input type={'text'} label={'Digite uma mensagem'} styleClass={'chat_message'} submitButton={true}>
                    <SubmitButton />
                </Input>
            </div>
        </div>
    );
}