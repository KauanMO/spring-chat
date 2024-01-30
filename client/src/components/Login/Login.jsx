import React, { useState } from "react";
import styles from './Login.module.css'
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ClickableText } from "../Text/Text";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleOnClickLogin() {
        try {
            const loginRes = await fetch('http://localhost:8080/user', {
                headers: {
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const login = await loginRes.json();

            if (login.status === 200) {
                sessionStorage.setItem('id', login.data);
                sessionStorage.setItem('username', username);
                navigate('/chat');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <Input id={'input_username'} type={'text'} handleOnChange={e => { setUsername(e.target.value); }} styleClass={'login'} label={'Username'} />
                <Input id={'input_senha'} type={'password'} handleOnChange={e => { setPassword(e.target.value); }} styleClass={'login'} label={'Senha'} />
                <Button label={'Login'} handleOnClick={handleOnClickLogin} styleClass={'login'} />
                <ClickableText text={'Não possuo uma conta'} color={'black'} fontSize={'1.1rem'} handleOnClick={() => { navigate('/register') }} />
            </div>
        </div>
    );
}