import { AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import styles from './Chat.module.css'
import { Input } from "../Input/Input";


export const Chat = ({ stompClient, messages }) => {
    const [message, setMessage] = useState('');
    console.log(messages);

    const SubmitButton = () => {
        return <div onClick={sendMessage} className={styles.submit_button}>
            <AiFillCaretRight />
        </div>
    }

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
                <span>{m.message}</span>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {
                messages[0]
                    ? messages.map(message => {
                        return <Message key={message.messageid} m={message} />
                    })
                    : <p>Sem mensagens</p>
            }

            <div className={styles.chat_input_message}>
                <Input name={'chat_message'} type={'text'}
                    handleOnInput={e => { setMessage(e.target.value); }}
                    handleOnKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
                    label={'Digite uma mensagem'} styleClass={'chat_message'} submitButton={true}>
                    <SubmitButton />
                </Input>
            </div>
        </div>
    );
}