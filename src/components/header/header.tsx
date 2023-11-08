import React from 'react';

import styles from './header.module.sass'
import Link from "next/link";
import {Button} from "antd";

import {Logo} from "@/components/logo";
import {LogoutOutlined} from "@ant-design/icons";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={'/auth'}>
                <Button className={styles.button} type={'link'}  icon={<LogoutOutlined />}>Выйти</Button>
            </Link>
            <Logo/>
        </div>
    );
};

