import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Bolgar | Portfolio',
  description: 'Welcome to my Full-Stack Developer portfolio, where innovation meets functionality! I am a passionate and results-driven developer with a proven track record of creating seamless, user-centric web applications from concept to deployment. With a diverse skill set that spans both front-end and back-end technologies, I bring a holistic approach to web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} relative xl:w-[1100px] xl:px-0 px-4 sm:text-start text-center sm:px-24 m-auto bg-zinc-900 text-white`}>
      <div className="bg-zinc-800 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[50rem] sm:w-[48.75rem]"></div>
      <div className="bg-[#2e2e52] absolute top-[-1rem] -z-10 left-[-35rem] h-[21.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Toaster position='top-right'/>
        <Header />
        {children}
        </body>
    </html>
  )
}
