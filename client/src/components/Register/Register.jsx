import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from './Register.module.css'
import { useState } from "react";
import { ClickableText } from "../Text/Text";
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function register() {
        if (confirmPassword === password) {
            const userRes = await fetch('http://localhost:8080/user/register', {
                headers: {
                    "Content-type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const user = await userRes.json();

            sessionStorage.setItem('id', user);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <Input type={'text'} label={'Username'} styleClass={'register'} handleOnChange={e => { setUsername(e.target.value) }} />
                <Input type={'password'} label={'Senha'} styleClass={'register'} handleOnChange={e => { setPassword(e.target.value) }} />
                <Input type={'password'} label={'Confirme a senha'} styleClass={'register'} handleOnChange={e => { setConfirmPassword(e.target.value) }} />
                <Button styleClass={'register'} label={'Cadastrar'} handleOnClick={register} />
                <ClickableText text={'Possuo uma conta'} color={'black'} fontSize={'1.1rem'} handleOnClick={() => { navigate('/') }} />
            </div>
        </div>
    );
}