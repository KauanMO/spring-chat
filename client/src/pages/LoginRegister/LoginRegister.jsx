import React, { useRef } from "react";
import styles from './LoginRegister.module.css'
import { HomeForm } from "../../components/HomeForm/HomeForm";

export const LoginRegister = () => {
    const toRegisterHolder = useRef(null);
    const toChatHolder = useRef(null);

    const waves = {
        login: {
            wave1: {
                path: 'M0 50.2423L32 37.6818C64 25.1212 128 2.07552e-06 192 4.1607C256 8.63541 320 41.6069 384 62.8029C448 83.9989 512 91.8493 576 79.5242C640 66.7281 704 33.7566 768 16.7213C832 3.32083e-06 896 2.07552e-06 960 4.1607C1024 8.63541 1088 16.4858 1152 33.5211C1216 50.2423 1280 75.3635 1344 96.324C1408 116.97 1472 134.241 1536 117.206C1600 100.485 1664 50.2423 1728 25.1212C1792 0 1856 0 1888 0H1920V585H1888C1856 585 1792 585 1728 585C1664 585 1600 585 1536 585C1472 585 1408 585 1344 585C1280 585 1152 585 1152 585C1152 585 1024 585 960 585C896 585 832 585 768 585C704 585 640 585 576 585C512 585 448 585 384 585C320 585 311 585 247 585C183 585 144.5 585 112.5 585H0V50.2423Z',
                color: '#29A4C3'
            },
            wave2: {
                path: 'M0 128L45.7333 138.7C91.4667 149 182.667 171 274.667 149.3C365.733 128 457.333 64 548 42.7C640 21 732 43 822.667 53.3C914.267 64 1005.33 64 1097.33 58.7C1188.53 53 1280 43 1372 64C1462.8 85 1554.67 139 1645.33 133.3C1737.2 128 1828 64 1874.67 32L1920 0V320H1874.27C1828.53 320 1737.33 320 1645.33 320C1554.27 320 1462.67 320 1372 320C1280 320 1188 320 1097.33 320C1005.73 320 914.667 320 822.667 320C731.467 320 640 320 548 320C457.2 320 365.333 320 274.667 320C182.8 320 92 320 45.3333 320H0V128Z',
                color: '#318DB2'
            },
            wave3: {
                path: 'M0 0H80C160 0 320 2.86102e-06 480 5.3C640 11 800 21 960 21.3C1120 21 1303 21.3 1468 21.3C1633 21.3 1714.5 21.3 1822.5 21.3H1920V224H1840C1760 224 1600 224 1440 224C1280 224 1120 224 960 224C800 224 640 224 480 224C320 224 160 224 80 224H0V0Z',
                color: '#046997',
                opacity: '0.90'
            }
        },
        register: {
            wave1: {
                path: 'M0 65.25L53.3333 97.875C106.667 130.5 213.333 195.75 320 206.557C426.667 218.18 533.333 173.32 640 119.693C746.667 65.25 853.333 5.8338e-06 960 10.807C1066.67 22.4297 1173.33 108.07 1280 173.932C1386.67 238.57 1493.33 283.43 1600 250.193C1706.67 218.18 1813.33 108.07 1866.67 54.443L1920 0V522H1866.67C1813.33 522 1706.67 522 1600 522C1493.33 522 1386.67 522 1280 522C1173.33 522 1066.67 522 960 522C853.333 522 746.667 522 640 522C533.333 522 426.667 522 320 522C213.333 522 106.667 522 53.3333 522H0V65.25Z',
                color: '#046997'
            },
            wave2: {
                path: 'M0 153.282L80 162.912C160 173.269 320 191.439 480 211.426C640 231.413 800 249.582 960 201.796C1120 153.282 1280 36.9951 1440 7.92329C1600 -21.1485 1760 36.9951 1840 66.0669L1920 95.1386V444H1840C1760 444 1600 444 1440 444C1280 444 1120 444 960 444C800 444 640 444 480 444C320 444 160 444 80 444H0V153.282Z',
                color: '#015176'
            },
            wave3: {
                path: 'M-5 90.25H75.2083C155.417 90.25 315.833 90.25 476.25 75.1613C636.667 60.6367 797.083 29.6133 957.5 45.125C1117.92 60.6367 1278.33 119.863 1438.75 120.286C1599.17 119.863 1759.58 60.6367 1839.79 30.0363L1920 0V361H1839.79C1759.58 361 1599.17 361 1438.75 361C1278.33 361 1117.92 361 957.5 361C797.083 361 636.667 361 476.25 361C315.833 361 155.417 361 75.2083 361H-5V90.25Z',
                color: '#044360',
                opacity: '0.90'
            }
        }
    }

    const Wave = ({ path, color, opacity = '1', id, specificClass }) => {
        return <svg id={id} className={`${styles.wave} ${specificClass}`} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 1920 1'} fill="none" >
            <path d={path}
                fill={color} fillOpacity={opacity} />
        </svg >
    }

    const toRegister = () => {
        toRegisterHolder.current.style.animation = `${styles.holder_to_register_animation} 800ms forwards ease-out`;
        toChatHolder.current.style.animation = `${styles.holder_to_chat_animation} 800ms forwards ease-out`;

        document.querySelector("#wave_1_register").style.animation = `${styles.register_wave_1_animation} 1s forwards`;
        document.querySelector("#wave_2_register").style.animation = `${styles.register_wave_2_animation} 1.2s forwards`;
        document.querySelector("#wave_3_register").style.animation = `${styles.register_wave_3_animation} 1.4s forwards`;
    }

    const LoginWaves = () => {
        return (
            <>
                <Wave specificClass={styles.login_wave_1} path={waves.login.wave1.path} color={waves.login.wave1.color} id={'wave_1_login'} />
                <Wave specificClass={styles.login_wave_2} path={waves.login.wave2.path} color={waves.login.wave2.color} id={'wave_2_login'} />
                <Wave specificClass={styles.login_wave_3} path={waves.login.wave3.path} color={waves.login.wave3.color} id={'wave_3_login'} opacity={waves.login.wave3.opacity} />
            </>
        );
    }

    const RegisterWaves = () => {
        return (
            <>
                <Wave specificClass={`${styles.register_wave_1}`} path={waves.register.wave1.path} color={waves.register.wave1.color} id={'wave_1_register'} />
                <Wave specificClass={`${styles.register_wave_2}`} path={waves.register.wave2.path} color={waves.register.wave2.color} id={'wave_2_register'} />
                <Wave specificClass={`${styles.register_wave_3}`} path={waves.register.wave3.path} color={waves.register.wave3.color} id={'wave_3_register'} />
            </>
        );
    }

    const Bubble = () => {
        const bubbleSrc = `./assets/bubble_${parseInt(Math.random() * 2 + 1)}.svg`;

        const bubble_width = parseInt(Math.random() * 10 + 40);

        return (
            <img width={`${bubble_width}px`} className={`${styles.bubble}`} src={bubbleSrc} alt="" ></img >
        );
    }

    return (
        <div className={styles.container}>
            <div ref={toRegisterHolder} className={styles.to_register_holder}>
                <LoginWaves />
            </div>

            <div ref={toChatHolder} className={styles.to_chat_holder}>
                <RegisterWaves />
                <Bubble />
            </div>

            <HomeForm toRegisterCallback={toRegister} />
        </div>
    );
}