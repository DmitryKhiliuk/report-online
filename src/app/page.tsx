import Image from 'next/image'
import styles from './page.module.sass'
import { cookies } from 'next/headers'
import {Button} from "antd";


export default function Home() {
  const cookieStore = cookies()

  const cook = cookieStore.get('JWT')


  return (
    <main >

    </main>
  )
}
