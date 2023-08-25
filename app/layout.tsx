import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ModelProvider from '@/providers/model-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'RossiWeb Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModelProvider />
        <ToastProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
