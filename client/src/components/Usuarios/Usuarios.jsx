import React, { useState, useEffect } from "react";
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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function findUsers() {
            const usersRes = await fetch(`http://localhost:8080/user`);
            const userJson = await usersRes.json();

            let onOffUsers = new Map();

            userJson.data.forEach(user => {
                onOffUsers.set(user.userid, false);
            });

            // const onOffRes = await fetch(`http://localhost:8080/`)

            setUsers(userJson.data);
        }

        findUsers()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.usuarios}>
                <div className={styles.title_container}>
                    <span className={styles.title}>Usuários</span>
                </div>
                <div className={styles.usuarios_list}>
                    {users[0]
                        ? users.map(user => {
                            return (
                                <Usuario key={user} name={user.username} />
                            )
                        })
                        : 'Buscando usuários'}
                </div>
            </div>
        </div>
    );
}