import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata = {
  title: 'Shahzad Haider - Software Engineer',
  description: 'Backend developer specializing in microservices and scalable systems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
