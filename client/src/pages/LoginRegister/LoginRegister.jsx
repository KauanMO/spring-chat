import React, { useRef } from "react";
import styles from './LoginRegister.module.css'
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LoginRegister = () => {
    const toRegisterHolder = useRef(null);

    const waves = {
        login: {
            wave1: {
                path: 'M0 50.2423L32 37.6818C64 25.1212 128 2.07552e-06 192 4.1607C256 8.63541 320 41.6069 384 62.8029C448 83.9989 512 91.8493 576 79.5242C640 66.7281 704 33.7566 768 16.7213C832 3.32083e-06 896 2.07552e-06 960 4.1607C1024 8.63541 1088 16.4858 1152 33.5211C1216 50.2423 1280 75.3635 1344 96.324C1408 116.97 1472 134.241 1536 117.206C1600 100.485 1664 50.2423 1728 25.1212C1792 0 1856 0 1888 0H1920V585H1888C1856 585 1792 585 1728 585C1664 585 1600 585 1536 585C1472 585 1408 585 1344 585C1280 585 1152 585 1152 585C1152 585 1024 585 960 585C896 585 832 585 768 585C704 585 640 585 576 585C512 585 448 585 384 585C320 585 311 585 247 585C183 585 144.5 585 112.5 585H0V50.2423Z',
                color: '#29A4C3',
                viewBox: '0 0 1918 585'
            },
            wave2: {
                path: 'M0 128L45.7333 138.7C91.4667 149 182.667 171 274.667 149.3C365.733 128 457.333 64 548 42.7C640 21 732 43 822.667 53.3C914.267 64 1005.33 64 1097.33 58.7C1188.53 53 1280 43 1372 64C1462.8 85 1554.67 139 1645.33 133.3C1737.2 128 1828 64 1874.67 32L1920 0V320H1874.27C1828.53 320 1737.33 320 1645.33 320C1554.27 320 1462.67 320 1372 320C1280 320 1188 320 1097.33 320C1005.73 320 914.667 320 822.667 320C731.467 320 640 320 548 320C457.2 320 365.333 320 274.667 320C182.8 320 92 320 45.3333 320H0V128Z',
                color: '#318DB2',
                viewBox: '0 0 1918 320'
            },
            wave3: {
                path: 'M0 0H80C160 0 320 2.86102e-06 480 5.3C640 11 800 21 960 21.3C1120 21 1303 21.3 1468 21.3C1633 21.3 1714.5 21.3 1822.5 21.3H1920V224H1840C1760 224 1600 224 1440 224C1280 224 1120 224 960 224C800 224 640 224 480 224C320 224 160 224 80 224H0V0Z',
                color: '#046997',
                opacity: '0.90',
                viewBox: '0 0 1920 224'
            }
        }
    }

    const Wave = ({ path, color, opacity = '1', id, viewBox, specificClass }) => {
        return <svg id={id} className={`${styles.wave} ${specificClass}`} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill="none" >
            <path d={path}
                fill={color} fillOpacity={opacity} />
        </svg >
    }

    const toRegister = () => {
        toRegisterHolder.current.style.animation = `${styles.holder_to_register_animation} 1s forwards ease-out`;
    }

    return (
        <div className={styles.container}>
            <div ref={toRegisterHolder} className={styles.to_register_holder}>
                <Wave specificClass={styles.wave_1} path={waves.login.wave1.path} color={waves.login.wave1.color} id={'wave_1_login'} viewBox={waves.login.wave1.viewBox} />
                <Wave specificClass={styles.wave_2} path={waves.login.wave2.path} color={waves.login.wave2.color} id={'wave_2_login'} viewBox={waves.login.wave2.viewBox} />
                <Wave specificClass={styles.wave_3} path={waves.login.wave3.path} color={waves.login.wave3.color} id={'wave_3_login'} viewBox={waves.login.wave3.viewBox} />
            </div>

            <LoginForm toRegisterCallback={toRegister} />
        </div>
    );
}