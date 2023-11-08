import React from 'react';
import Image from "next/image";

import styles from './logo.module.sass'


import image from '../../assets/logo.svg'

export const Logo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <Image
                    src={image.src}
                    alt="logo"
                    width={80}
                    height={80}
                    priority={true}
                />
            </div>
        </div>
    );
};

