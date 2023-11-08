import type { Metadata } from 'next'



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

      <section className={'container'}>
        {children}
      </section>

  )
}
