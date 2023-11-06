'use client'
import React from 'react';
import {Button, Form, Input} from 'antd';

import styles from './form.module.sass'

interface FieldType {
    username?: string;
    password?: string;
    remember?: string;
}

export const FormAuth = () => {


    const onFinish = (values: any) => {
        console.log({username: values.username, password: values.password});
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.form} >
            <div className={styles.item}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <Form.Item<FieldType>
                        label="Логин"
                        name="username"
                        rules={[{required: true, message: 'Введите свой логин!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Введите свой пароль!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>


                    <Form.Item wrapperCol={{sm: {offset: 8, span: 16,}}}>
                        <Button type="primary" htmlType="submit" className={styles.button} >
                            Вход
                        </Button>
                    </Form.Item>
                    <Form.Item wrapperCol={{sm: {offset: 8, span: 16,}}} >
                        <div style={{color: 'red'}}>Неправильный логин или пароль</div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

