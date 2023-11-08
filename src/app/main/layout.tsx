import type { Metadata } from 'next'
import {Options} from "@/components/options";

import styles from './layout.module.sass'
import {workerMain} from "next/dist/build/webpack-build/impl";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";
import {Header} from "@/components/header";



export const metadata: Metadata = {
  title: 'report-online | Main',
  description: 'Main page',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
          <header>
              <Header/>
          </header>
          <main className={styles.section}>
              <Options/>
              {children}
          </main>
      </div>



  )
}
