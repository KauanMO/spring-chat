import React, { useState } from "react";
import styles from './Login.module.css'
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Login = () => {

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    async function handleOnClickLogin() {
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <Input id='input_username' type='text' handleOnChange={e => { setUsername(e.target.value); }} style='login' label='Username' />
                <Input id='input_senha' type='text' handleOnChange={e => { setSenha(e.target.value); }} style='login' label='Senha' />
                <Button label='Login' handleOnClick={handleOnClickLogin} style='login' />
            </div>
        </div>
    );
}