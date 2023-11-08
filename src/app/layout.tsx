import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from "@/lib/antdRegistry";
import {ReactNode} from "react";


export const metadata: Metadata = {
  title: 'report-online | Auth',
  description: 'Authentication page',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={'container'}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
