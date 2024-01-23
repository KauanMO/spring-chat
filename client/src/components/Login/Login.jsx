import React, { useState } from "react";
import styles from './Login.module.css'
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ClickableText } from "../Text/Text";

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleOnClickLogin() {
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
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <Input id={'input_username'} type={'text'} handleOnChange={e => { setUsername(e.target.value); }} styleClass={'login'} label={'Username'} />
                <Input id={'input_senha'} type={'password'} handleOnChange={e => { setPassword(e.target.value); }} styleClass={'login'} label={'Senha'} />
                <Button label={'Login'} handleOnClick={handleOnClickLogin} styleClass={'login'} />
                <ClickableText text={'Não possuo uma conta'} color={'white'} fontSize={'1.1rem'} />
            </div>
        </div>
    );
}