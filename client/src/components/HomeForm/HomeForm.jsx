import React, { useState, useRef } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ClickableText } from "../Text/Text";
import { useNavigate } from 'react-router-dom';
import styles from './HomeForm.module.css';

export const HomeForm = ({ toRegisterCallback, toChatCallback }) => {
    const navigate = useNavigate();

    const [clickableText, setClickableText] = useState('Não possuo uma conta');
    const [buttonText, setButtonText] = useState('Login');
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [currentForm, setCurrentForm] = useState('login');

    const formContainer = useRef(null);

    async function loginCadastro() {
        try {
            // const res = await fetch(`http://localhost:8080/user${currentForm === 'login' ? '' : '/register'}`, {
            //     headers: {
            //         "Content-type": "application/json"
            //     },
            //     method: 'POST',
            //     body: JSON.stringify({
            //         username,
            //         password
            //     })
            // });

            // const resJson = await res.json();

            // if (resJson.status === 200) {
            //     sessionStorage.setItem('id', resJson.data);
            //     sessionStorage.setItem('username', username);

            toChat(toChatCallback);

            setTimeout(() => {
                navigate('/chat');
            }, 700)
            // }
        } catch (e) {
            console.log(e);
        }
    }

    function toRegister(callback) {
        formContainer.current.style.animation = `${styles.form_wave_out_animation} 800ms forwards ease-out`;

        setClickableText('Já possuo uma conta');
        setButtonText('Cadastrar');
        setCurrentForm('register');

        callback();
    }

    function toChat(callback) {
        formContainer.current.style.opacity = '0';
        setTimeout(() => {
            formContainer.current.style.display = 'none';
        }, 150);

        callback();
    }

    return (
        <div ref={formContainer} className={styles.form_container}>
            <Input id={'input_username'} type={'text'} handleOnChange={e => { setUsername(e.target.value); }} styleClass={'login'} label={'Usuário'} />
            <Input id={'input_senha'} type={'password'} handleOnChange={e => { setPassword(e.target.value); }} styleClass={'login'} label={'Senha'} />
            <div className={styles.button_clickableText}>
                <Button name={'login_register_button'} label={buttonText} handleOnClick={loginCadastro} styleClass={'login'} />
                <ClickableText name={'switch_form'} text={clickableText} color={'white'} fontSize={'1.6rem'} handleOnClick={() => { toRegister(toRegisterCallback) }} />
            </div>
        </div>
    )
}