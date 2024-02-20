import React from "react";
import styles from './Usuarios.module.css';

const Usuario = ({ name, online = false }) => {
    return (
        <div className={styles.usuario_container}>
            <span className={styles.usuario_name}>{name}</span>
            <div className={`${styles.online_icon} ${styles[online ? 'online' : 'offline']}`}></div>
        </div>
    );
}

export const Usuarios = () => {
    return (
        <div className={styles.container}>
            <div className={styles.usuarios}>
                <div className={styles.title_container}>
                    <span className={styles.title}>Usuários</span>
                </div>
                <div className={styles.usuarios_list}>
                    <Usuario name={'Kauan Oliveira'} />
                    <Usuario name={'Melissa Rodrigues'} online />
                </div>
            </div>
        </div>
    );
}